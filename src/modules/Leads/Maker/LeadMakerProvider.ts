import {
  ApiResponse,
  ApiResponseType,
  HttpCodes,
} from '@/infrastructure/Network/Http/ApiResponse'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'

export class LeadMakerProvider {
  private response: ApiResponse
  private readonly request: ApiRequest

  constructor() {
    this.response = new ApiResponse()
    this.request = new ApiRequest()
  }

  public createWith(data: SubmitDataStruct): boolean {
    let result = false

    const response: Promise<Object> = this.request
      .fetch({
        method: ApiRequestMethods.POST,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
        endpoint: '/lead/make',
      })
      .then(async res => {
        return res
      })

    response.then(async res => {
      const r: ApiResponseType = this.response.makeFromObject(res)
      result = r.code === HttpCodes.OK
    })

    return result
  }
}
