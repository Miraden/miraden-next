import {
  ApiResponse,
} from '@/infrastructure/Network/Http/ApiResponse'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'

const URL: string = '/cities'

export interface LocationFlatStruct {
  cityId: number
  countryId: number
  cityName: string
  countryName: string
}

export interface CitiesStruct {
  name: string
  id: number
}

export interface CountriesStruct {
  id: number
  name: string
  cities: Array<CitiesStruct>
}

export enum LocationView {
  Flat = 0,
  Countries = 1,
}

class LocationsProvider {
  private response: ApiResponse
  private readonly request: ApiRequest
  private data: LocationFlatStruct[] | CountriesStruct[]

  constructor() {
    this.response = new ApiResponse()
    this.request = new ApiRequest()
    this.data = []
  }

  public fetch(view: LocationView = LocationView.Flat): Promise<Object> {
    let url: string = URL
    if (view === LocationView.Countries) {
      url += '?view=countries'
    }
    if (view === LocationView.Flat) {
      url += '?view=flat'
    }
    const response: Promise<Object> = this.request
      .fetch({
        method: ApiRequestMethods.GET,
        headers: {
          'Content-Type': 'application/json',
        },
        endpoint: url,
      })
      .then(async res => {
        return res
      })

    response.then(async res => {
      const r: ApiResponseType = this.response.makeFromObject(res)
      const p = r.payload
      if (typeof p != 'object') return p

      const payload: Array<Object> = p as Array<Object>

      if (view === LocationView.Flat) {
        this.data = payload.map((item: any): LocationFlatStruct => {
          return {
            cityId: item['cityName'],
            countryId: item['countryId'],
            countryName: item['countryName'],
            cityName: item['cityName'],
          }
        })
      }

      if (view === LocationView.Countries) {
        this.data = payload.map((item: any): CountriesStruct => {
          const cities: CitiesStruct[] = item['cities'] as CitiesStruct[]
          return {
            id: parseInt(item['id']),
            name: item['name'],
            cities: cities,
          }
        })
      }
    })

    return response
  }

  public getList(): LocationFlatStruct[] | CountriesStruct[] {
    return this.data
  }
}

export function instanceOfCountries(val: object): boolean {
  return 'cities' in val;
}

export default LocationsProvider
