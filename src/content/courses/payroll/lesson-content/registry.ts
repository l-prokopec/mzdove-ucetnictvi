import type { LessonContentRegistry } from './types'

// Obsah se přidává po modulech a explicitně se registruje pod stabilním ID lekce.
// Registr zůstává prázdný, dokud nevznikne první odborně dokončená lekce.
export const lessonContentRegistry: LessonContentRegistry = {}
