export class GoogleAutoComplete {
  private map: google.maps.Map | null
  protected service: google.maps.places.AutocompleteService | null
  private options: google.maps.places.AutocompleteOptions | null

  constructor() {
    this.map = null
    this.service = null
    this.options = null
  }

  public setMap(map: google.maps.Map): GoogleAutoComplete {
    this.map = map
    return this
  }

  public setOptions(
    opt?: google.maps.places.AutocompleteOptions
  ): GoogleAutoComplete {
    if (opt === undefined) {
      this.options = null
      return this
    }
    this.options = opt
    return this
  }

  public makeService(): google.maps.places.AutocompleteService | null {
    if (this.getService() !== null) return this.getService()
    if (this.map === null) return null

    const service = new google.maps.places.AutocompleteService()
    this.service = service

    return service
  }

  public searchLocation(
    q: string,
    onResult: (
      result: google.maps.places.QueryAutocompletePrediction[] | null
    ) => void
  ): void {
    if (!this.service) return

    this.service.getQueryPredictions(
      { input: q },
      (
        predictions: google.maps.places.QueryAutocompletePrediction[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (
          status != google.maps.places.PlacesServiceStatus.OK ||
          !predictions
        ) {
          return
        }
        onResult(predictions)
      }
    )
  }

  public getService(): google.maps.places.AutocompleteService | null {
    return this.service
  }
}
