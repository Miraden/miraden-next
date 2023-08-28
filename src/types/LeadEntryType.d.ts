declare namespace Leads {
  interface LeadEntryType {
    id: number
    cityId: number | null
    countryId: number
    cityName: string | null
    countryName: string
    createdAt: string
    locationDistance: number
    format: string
    status: string
    type: string
    typeEstate: string
    deadlineAt: string | null
    buildDate: string | null
    totalArea: number
    livingArea: number
    rooms: number
    beds: number
    bathrooms: number
    purpose: string | null
    readyDeal: string | null
    rentPeriodStart: string | null
    rentPeriodEnd: string | null
    purchaseType: string | null
    title: string
    accessAny: boolean
    budgetFrom: number
    budgetTo: number
    budgetPeriod: string | null
    isTrue: boolean
    currencyId: number
    currencyCode: string
    currencySymbol: string
    pin_expiresAt: string | null
    pin_autoUpEvery: string | null
    sellerStatus: string
    purchaseFirstPayment?: string
    purchaseFormat?: string
    owner: number
    description: string
  }

  interface LeadEntryCrudType {
    id: number
    createdAt: string
    locationDistance: number
    format: string
    status: string
    areas: {
      total: {
        value: number
        unit: string
      }
      living: {
        value: number
        unit: string
      }
    }
    rooms: {
      total: number
      beds: number
      bathroom: number
    }
    purpose: string
    readyDeal: string
    purchaseType: string
    wishes: {
      title: string
      text: string
    }
    paidOptions: {
      accessAny: boolean
      pin: boolean
      autoTop: boolean
    }
    tags: string[]
    iamOwner: boolean
    isTrue: boolean
    location: {
      city: string
      country: string
    }
    type: Object
    deadlineAt: string
    budget: {
      startFrom: number
      endAt: number
      currency: {
        id: number
        code: string
        symbol: string
      }
    }
    author: string
    rentPeriod: {
      startAt: string
      endAt: string
    }
  }
}
