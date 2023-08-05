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

interface SubmitLocation {
  city: number
  country: number
  radius: number
}

interface SubmitEstateType {
  root: string
  sublevel: string
}

interface SubmitRentPeriod {
  start: string
  end: string
}

interface SubmitBudget {
  from: number
  to: number
  period: string
  currency: number
}

interface SubmitPurchase {
  type: string
  firstPayment: number
  format: string
}

interface SubmitWishes {
  title: string
  text: string
}

interface PaymentOptions {
  anyCanResponse: boolean
  pinUpOneDay: boolean
  autoPinUpEveryThreeDays: boolean
  totalPrice: number
}

interface Area {
  total: number
  living: number
}

interface Rooms {
  total: number
  beds: number
  bathrooms: number
}

interface SubmitDataStruct {
  location: SubmitLocation
  format: string
  estateType: SubmitEstateType
  status: string
  deadlineAt: string
  buildYear: string
  area: Area
  rooms: Rooms
  purpose: string
  readyDeal: string
  rentPeriod: SubmitRentPeriod
  budget: SubmitBudget
  purchase: SubmitPurchase
  wishes: SubmitWishes
  paymentOptions: PaymentOptions
}
