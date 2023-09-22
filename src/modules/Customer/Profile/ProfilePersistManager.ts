import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { HttpCodes } from '@/infrastructure/Network/Http/ApiResponse'

abstract class ProfilePersistManager {
  public abstract update(value: Profile.PersistStruct): void

  public abstract flush(): Promise<boolean>
}

class ProfilePersistPersonalData implements ProfilePersistManager {
  private data: Profile.PersistStruct | undefined

  public async flush(): Promise<boolean> {
    const apiRequest: ApiRequest = new ApiRequest()

    const headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }

    const data = new FormData()
    data.append(String(this.data?.label), String(this.data?.value))
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    const response = (await apiRequest.fetch({
      headers: headers,
      body: body,
      endpoint: '/user/profile/personal',
      method: ApiRequestMethods.PATCH,
    })) as ApiResponseType

    return response.code === HttpCodes.OK
  }

  public update(value: Profile.PersistStruct): void {
    this.data = value
  }
}

export {
  ProfilePersistManager,
  ProfilePersistPersonalData,
}
