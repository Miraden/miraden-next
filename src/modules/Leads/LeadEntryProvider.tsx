import { ApiResponseStructure } from '@/infrastructure/Network/Http/ApiResponse'

class LeadEntryProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: Array<any>

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
  }

  public fetchData(): void {

  }

  public render(): JSX.Element {
    return (
      <>
        entry data
      </>
    )
  }
}

export { LeadEntryProvider }
