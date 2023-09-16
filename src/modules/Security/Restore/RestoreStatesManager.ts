class RestoreStatesManager {
  private states: RestoreContentStruct[]

  constructor() {
    this.states = []
    this.clear()
  }

  public append(data: RestoreContentStruct): void {
    const isExist = this.findByState(data.state)
    if (!isExist) this.states.push(data)
  }

  public findByState(val: number | string): RestoreContentStruct | null {
    const found = this.states.find(i => {
      return i.state == val
    })

    if (!found) return null

    return found
  }

  public getStates(): RestoreContentStruct[] {
    return this.states
  }

  public getTotal(): number {
    return this.states.length
  }

  public clear(): void {
    this.states = []
  }
}

export default RestoreStatesManager
