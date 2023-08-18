export {}

export namespace GoogleApi {
  export enum Libraries {
    Maps = 'maps',
    Places = 'places',
  }

  export enum PlacesSearchFields {
    Geometry = 'geometry',
    Name = 'name',
    FormattedAddress = 'formatted_address',
  }

  export function isMapLoaded(): boolean {
    return window.google !== undefined
  }
}
