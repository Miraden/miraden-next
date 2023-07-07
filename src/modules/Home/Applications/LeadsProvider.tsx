import {
  ApiResponse,
  ApiResponseStructure,
} from '@/infrastructure/Network/Http/ApiResponse'
import React from 'react'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'

class LeadsLastProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: Array<any>

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
  }

  public fetchData(): Promise<any> {
    const apiRequest: ApiRequest = new ApiRequest()
    const headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    return apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: headers,
        endpoint: '/leads/last',
      })
      .then(async res => {
        const response = new ApiResponse()
        return response.makeFromString(res)
      })
  }

  public setFetchedData(data: typeof ApiResponseStructure): void {
    this.data = data
    if (typeof data.payload == 'object') {
      this.payload = data.payload as Array<any>
    }
  }

  public setIsFinished(val: boolean): void {
    this.isFetchCompleted = val
  }

  public isFinished(): boolean {
    return this.isFetchCompleted
  }

  public render(): JSX.Element {
    if (!this.isFetchCompleted) {
      return <ul className="LeadsList">Loading...</ul>
    }

    if (this.payload.length == 0) {
      return <></>
    }
    return <>Leads list</>
  }

  public getLeadsByLocation(name: string): Array<any> {
    const payload = this.payload as Object
    if (name in payload) {
      // @ts-ignore
      return payload[name]
    }

    return []
  }

  public getLinks(): Array<string> {
    const payload = this.payload
    let links: Array<string> = []
    Object.keys(payload).forEach(function (link) {
      links.push(link)
    })

    return links
  }

  public getTotalLocations(): number {
    //@ts-ignore
    const metadata = this.data?.metadata?.pages
    if (!metadata) return 0

    let count: number = 0
    if ('items' in metadata) {
      count = metadata.items as number
    }

    return count
  }
}

export { LeadsLastProvider }
