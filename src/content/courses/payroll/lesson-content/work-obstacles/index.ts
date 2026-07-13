import { defineLessonContentRegistry } from '../define'
import { employeeObstaclesContent } from './employee-obstacles'
import { employerObstaclesContent } from './employer-obstacles'
import { obstacleCompensationContent } from './obstacle-compensation'
import { obstacleDocumentsContent } from './obstacle-documents'
import { publicInterestObstaclesContent } from './public-interest-obstacles'

export const workObstaclesContent = defineLessonContentRegistry({
  'employee-obstacles': employeeObstaclesContent,
  'public-interest-obstacles': publicInterestObstaclesContent,
  'employer-obstacles': employerObstaclesContent,
  'obstacle-documents': obstacleDocumentsContent,
  'obstacle-compensation': obstacleCompensationContent,
})
