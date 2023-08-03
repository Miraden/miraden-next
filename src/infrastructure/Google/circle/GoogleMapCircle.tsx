export class MapCircle {
  private map: google.maps.Map | null
  protected service: google.maps.Circle | null
  private options: google.maps.CircleOptions | null

  constructor() {
    this.options = null
    this.service = null
    this.map = null
  }

  public setOptions(opt: google.maps.CircleOptions): MapCircle {
    this.options = opt

    return this
  }

  public setMap(map: google.maps.Map): MapCircle {
    this.map = map

    return this
  }

  makeService(): google.maps.Circle | null {
    if (this.getService()) return this.getService()
    if (this.map === null) return null

    const service = new google.maps.Circle(this.options)
    service.setMap(this.map)

    this.service = service

    return service
  }

  public getService(): google.maps.Circle | null {
    return this.service
  }
}
