declare interface RestoreContentStruct {
  state: number | string
  title: string
  body: JSX.Element
  url?: string
  nextUrlLabel: string
  prevUrlLabel: string
  nextState?: number | string
  prevState?: number | string
}

interface RestoreSubmitStruct {
  email: string
  password: string
  token?: string
}
