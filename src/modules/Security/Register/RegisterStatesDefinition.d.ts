declare interface RegisterContentStruct {
  state: string | number
  title: string
  body: JSX.Element
  url?: string
  nextUrlLabel: string
  prevUrlLabel: string
  nextState?: string | number
  prevState?: string | number
}

interface RegisterSubmitStruct {
  sellerStatus: string
  name: string
  email: string
}
