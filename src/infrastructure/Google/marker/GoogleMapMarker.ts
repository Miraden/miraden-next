export {}

export class MapMarker {
  private map: google.maps.Map | null
  private options: google.maps.MarkerOptions | null
  protected service: google.maps.Marker | null

  constructor() {
    this.options = null
    this.service = null
    this.map = null
  }

  public setOptions(opt: google.maps.MarkerOptions): MapMarker {
    this.options = opt

    return this
  }

  public setMap(map: google.maps.Map): MapMarker {
    this.map = map

    return this
  }

  public makeService(): google.maps.Marker | null {
    if (this.getService()) return this.getService()
    if (this.map === null) return null
    if (this.options === null) return null

    const service = new google.maps.Marker(this.options)
    service.setMap(this.map)
    this.service = service

    return service
  }

  public getService(): google.maps.Marker | null {
    return this.service
  }
}
