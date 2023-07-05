interface ApiResponseType {
  code: number
  payload?: object | null | Array<any>
  errors?: object | null
  metadata?: object | null
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

class ApiResponse {
  constructor() {
  }

  makeFromString(json: object): typeof ApiResponseStructure {
    return Object.assign(ApiResponseStructure, json)
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

export {ApiResponse, HttpCodes, ApiResponseStructure}
