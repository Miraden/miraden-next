export class GooglePlacesService {
  private map: google.maps.Map | null
  protected service: google.maps.places.PlacesService | null
  private options: google.maps.places.PlaceOptions | null

  constructor() {
    this.options = null
    this.service = null
    this.map = null
  }

  public setOptions(
    opt?: google.maps.places.PlaceOptions
  ): GooglePlacesService {
    if (opt === undefined) {
      this.options = null

      return this
    }

    this.options = opt

    return this
  }

  public setMap(map: google.maps.Map): GooglePlacesService {
    this.map = map

    return this
  }

  makeService(): google.maps.places.PlacesService | null {
    if (this.getService()) return this.getService()
    if (this.map === null) return null

    const service = new google.maps.places.PlacesService(this.map)
    this.service = service

    return service
  }

  public getService(): google.maps.places.PlacesService | null {
    return this.service
  }
}
