class StatesManager {
  private states: LeadMakerStruct[]

  constructor() {
    this.states = []
    this.clearStates()
  }

  public append(data: LeadMakerStruct): void {
    const isExist = this.findByState(data.state)
    if (!isExist) this.states.push(data)
  }

  public findByState(val: string | number): LeadMakerStruct | null {
    const found = this.states.find(i => {
      return i.state === val
    })

    if (!found) return null

    return found
  }

  public getTotal(): number {
    return this.states.length
  }

  public getStates(): LeadMakerStruct[] {
    return this.states
  }

  public clearStates(): void {
    this.states = []
  }
}

export default StatesManager
