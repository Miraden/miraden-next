import { useState } from 'react'

let updateOnce = true

const useUpdater = (): void => {
  const [render, forceRender] = useState<boolean>(false)

  if (updateOnce) {
    updateOnce = false
    forceRender(!render)
  }
}

export default useUpdater
