import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

class ChatRoomsProvider {
  constructor() {}

  public async fetchAll(): Promise<Chat.Preview[]> {
    const apiRequest: ApiRequest = new ApiRequest()
    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        endpoint: '/chat/sellers',
      })
      .then(async res => {
        return res
      })

    const res_1 = await response
    const p = apiResponse.makeFromObject(res_1)
    return p.payload as Chat.Preview[]
  }
}

export default ChatRoomsProvider
