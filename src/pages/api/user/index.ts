import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const submittedData = req.body

  const data: string = new URLSearchParams(submittedData).toString()
  const result = apiRequest.fetch({
    method: ApiRequestMethods.POST,
    headers: headers,
    body: data,
    endpoint: '/user/login',
  })

  const token = await result
    .then(async res => {
      const response = res as ApiResponseType
      const payload = response.payload as UserAuthPayload
      return payload.token
    })
    .catch(reason => {})
    .finally(() => {})

  const response: ApiResponseType = {
    code: 200,
    payload: {
      token: token,
    },
  }

  res.setHeader('set-cookie', 'token=' + token + '; Path=/;')

  res.status(200).json(response)
}
