declare interface LeadMakerStruct {
  state: string | number
  title: string
  body: JSX.Element
  url?: string
  nextUrlLabel: string
  prevUrlLabel: string
  nextState?: string | number
  prevState?: string | number
}

interface SubmitDataStruct {
  location: {
    city: number
    country: number
  }
  format: string
  estateType: {
    root: string
    sublevel: string
  }
  estateStatus: string
  deadlineAt: string
  buildYear: string
  area: number
  livingArea: number
  rooms: number
  beds: number
  bathrooms: number
  purpose: string
  readyDeal: string
  rentPeriod: {
    start: string
    end: string
  }
  budget: {
    from: number
    to: number
    period: string
    currency: number
  }
  purchase: {
    type: string
    firstPayment: number
    format: string
  }
  wished: {
    title: string
    text: string
  },
  totalTax: number
}
