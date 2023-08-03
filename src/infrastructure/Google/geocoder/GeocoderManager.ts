export class GeocoderManager {
  private map: google.maps.Map | null
  protected service: google.maps.Geocoder | null
  protected searchResult: google.maps.GeocoderResult[]

  constructor() {
    this.map = null
    this.service = null
    this.searchResult = []
  }

  public setMap(map: google.maps.Map): GeocoderManager {
    this.map = map
    return this
  }

  public makeService(): google.maps.Geocoder | null {
    if (this.getService() !== null) return this.getService()
    if (this.map === null) return null

    const service = new google.maps.Geocoder()
    this.service = service

    return service
  }

  public geocodeByPlaceId(
    id: string
  ): Promise<google.maps.GeocoderResponse> | null {
    if (this.service === null) return null

    return this.service.geocode({ placeId: id })
  }

  public findByQuery(q: string): Promise<google.maps.GeocoderResponse> | null {
    if (this.service === null) return null
    if (q.length === 0) return null

    return this.service.geocode({ address: q })
  }

  public addResult(res: google.maps.GeocoderResult | null): void {
    if (res === null) return
    if (this.inFounded(res)) return
    this.searchResult.push(res)
  }

  public getResults(): google.maps.GeocoderResult[] {
    return this.searchResult
  }

  public clearResults(): void {
    this.searchResult = []
  }

  public getService(): google.maps.Geocoder | null {
    return this.service
  }

  private inFounded(res: google.maps.GeocoderResult | null): boolean {
    if (res === null) return false

    const id = res.place_id

    return this.findById(id) !== null
  }

  private findById(id: string): google.maps.GeocoderResult | null {
    const found = this.searchResult.find((i): boolean => {
      return i.place_id === id
    })
    if (found === undefined) return null

    return found
  }
}
