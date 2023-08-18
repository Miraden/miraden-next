import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

class FavoritesProvider {
  constructor() {}

  public add(userId: number): Promise<ApiResponseType> {
    const url = '/user/favorites/' + userId + '/add'
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }

    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.POST,
        headers: headers,
        endpoint: url,
      })
      .then(async res => {
        return res
      })

    return response.then(async res => {
      return apiResponse.makeFromObject(res)
    })
  }

  public remove(userId: number): void {
    const url = '/leads/favorites/' + userId + '/remove'
  }
}

export default FavoritesProvider
