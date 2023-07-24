import { useEffect } from 'react'
import AuthManager from '@/modules/Security/Authentication/AuthManager'

export interface AuthStruct {
  onSuccess: Function
  onFailure: Function
}

const useAuth = ({ onSuccess, onFailure }: AuthStruct): void => {
  useEffect(() => {
    const authManager = new AuthManager()
    const tokenValidate: Promise<boolean> = authManager.isTokenValid()

    tokenValidate.then(async res => {
      if (res) onSuccess()
      if (!res) onFailure()
    })
  }, [])
}

export default useAuth
