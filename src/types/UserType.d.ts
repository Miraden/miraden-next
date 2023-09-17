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
    balance: number
  }

  interface FullProfile extends PublicProfile {
    email: string
    mobile: string | null
    whatsapp: string | null
    skype: string | null
    facebook: string | null
    telegram: string | null
    viber: string | null
    zoom: string | null
    instagram: string | null
    site: string | null
    youtube: string | null
    about: string | null
  }

  interface OnlineStatus {
    isOnline: boolean
    lastOnlineDate?: string
  }
}
