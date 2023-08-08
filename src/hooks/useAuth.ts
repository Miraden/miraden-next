import { useEffect, useMemo } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'

export interface AuthStruct {
  onSuccess: Function
  onFailure: Function
  onResponse: Function
}

let tokenValidator: Promise<boolean> | null = null

const useAuth = ({ onSuccess, onFailure, onResponse }: AuthStruct): void => {
  useEffect(() => {
    if(tokenValidator !== null) return
    const authManager = new AuthManager()
    tokenValidator = authManager.isTokenValid()

    tokenValidator.then(async res => {
      if (res) onSuccess()
      if (!res) onFailure()
      onResponse()
    })
  }, [onFailure, onResponse, onSuccess])
}

export default useAuth
