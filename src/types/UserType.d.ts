declare namespace User {
  interface PublicProfile {
    id: number
    name: string
    surname: string
    sellerStatus: string
    photo: string
    isPassportVerified: boolean
    isPro: boolean
    rating: number
    registeredAt: string
    registeredTransl: {
      months: string
      days: string
      years?: string
    }
  }

  interface FullProfile {}
}
