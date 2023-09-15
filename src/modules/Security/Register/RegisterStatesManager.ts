class RegisterStatesManager {
  private states: RegisterContentStruct[]

  constructor() {
    this.states = []
    this.clearStates()
  }

  public append(data: RegisterContentStruct): void {
    const isExist = this.findByState(data.state)
    if (!isExist) this.states.push(data)
  }

  public findByState(val: string | number): RegisterContentStruct | null {
    const found = this.states.find(i => {
      return i.state === val
    })

    if (!found) return null

    return found
  }

  public getTotal(): number {
    return this.states.length
  }

  public getStates(): RegisterContentStruct[] {
    return this.states
  }

  public clearStates(): void {
    this.states = []
  }
}

export default RegisterStatesManager
