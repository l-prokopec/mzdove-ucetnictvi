import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { LessonProgress } from '../../types/course'
import {
  fetchLessonProgress,
  progressKeys,
  upsertLessonProgress,
} from '../../services/progress'

export function useProgress(client: SupabaseClient, userId: string) {
  return useQuery({
    queryKey: progressKeys.all,
    queryFn: () => fetchLessonProgress(client, userId),
    staleTime: 30_000,
    retry: 1,
  })
}

export function useSaveProgress(client: SupabaseClient, userId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (progress: LessonProgress) =>
      upsertLessonProgress(client, userId, progress),
    onMutate: async (next) => {
      await queryClient.cancelQueries({ queryKey: progressKeys.all })
      const previous = queryClient.getQueryData<LessonProgress[]>(
        progressKeys.all,
      )
      queryClient.setQueryData<LessonProgress[]>(
        progressKeys.all,
        (old = []) => [
          ...old.filter((item) => item.lesson_id !== next.lesson_id),
          next,
        ],
      )
      return { previous }
    },
    onError: (_error, _next, context) =>
      queryClient.setQueryData(progressKeys.all, context?.previous),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: progressKeys.all }),
  })
}
