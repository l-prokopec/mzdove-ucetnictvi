export interface LegalParameter<T> {
  id: string
  value: T
  validFrom: string
  validTo?: string
  sourceTitle: string
  sourceUrl?: string
  verifiedAt?: string
}

// Konkrétní sazby, limity a částky se doplní až po odborném ověření
// v aktuálním oficiálním zdroji. První verze je záměrně neobsahuje.
export const cz2026Parameters: LegalParameter<unknown>[] = []
