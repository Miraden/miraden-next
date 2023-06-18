const url: string = 'https://miraden-freelance.test/v1'

enum ApiRequestMethods {
  POST = "POST",
  GET = "GET",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  PATCH = "PATCH",
  PUT = "PUT"
}

interface Props {
  method: ApiRequestMethods
  headers: HeadersInit
  body: string
  path: string
}

const defaultHeaders: HeadersInit = {
  "accept": "application/json",
  'X-Requested-With': 'XMLHttpRequest'
}

class ApiRequest {
  constructor() {
  }

  async fetch({method, headers, body, path}: Props): Promise<Object> {
    const uri: string = url + path
    const _headers: HeadersInit = Object.assign(defaultHeaders, headers)
    const response: Response = await fetch(uri, {
      method: method,
      headers: _headers,
      body: body
    })

    const j = response.json()
    const result: any[] = await Promise.all([j])

    return result.at(0)
  }
}

export {ApiRequest, url, ApiRequestMethods}
