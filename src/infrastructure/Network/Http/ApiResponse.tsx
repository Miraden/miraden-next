export interface ApiPagesType {
  total: number
  current: number
  items: number
}

enum HttpCodes {
  OK = 200,
  BAD_REQUEST = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
}

const ApiResponseStructure: ApiResponseType = {
  code: 0,
  payload: null,
  errors: null,
  metadata: null,
}

const ApiPagesStructure: ApiPagesType = {
  total: 0,
  current: 0,
  items: 0,
}

class ApiResponse {
  private response: typeof ApiResponseStructure

  constructor() {
    this.response = Object.assign(ApiResponseStructure, {})
  }

  makeFromObject(json: object): typeof ApiResponseStructure {
    this.response = Object.assign(ApiResponseStructure, json)
    return this.response
  }

  getPages(): ApiPagesType | null {
    if (!this.response.metadata) return null

    const meta: Object = this.response.metadata
    if (!('pages' in meta)) {
      return null
    }

    // @ts-ignore
    return Object.assign(ApiPagesStructure, meta['pages'])
  }
}

function codeFromNumber(code: number): HttpCodes {
  let result: HttpCodes
  switch (code) {
    case 200:
      result = HttpCodes.OK
      break
    case 401:
      result = HttpCodes.BAD_REQUEST
      break
    case 403:
      result = HttpCodes.FORBIDDEN
      break
    case 404:
      result = HttpCodes.NOT_FOUND
      break
    case 405:
      result = HttpCodes.METHOD_NOT_ALLOWED
      break
    case 500:
      result = HttpCodes.INTERNAL_SERVER_ERROR
      break
    default:
      result = HttpCodes.BAD_REQUEST
      break
  }

  return result
}

export { ApiResponse, HttpCodes, ApiResponseStructure, ApiPagesStructure }
