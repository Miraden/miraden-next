import { useCallback, useRef, useState } from 'react'

type Props = {
  controlled: boolean | undefined
  defaultValue: boolean | undefined
}

export function useControlled({
  controlled,
  defaultValue,
}: Props): [boolean, (value: boolean) => void] {
  const { current: isControlled } = useRef(controlled !== undefined)
  const [valueState, setValue] = useState(!!defaultValue)
  const value = isControlled ? controlled : valueState

  const setValueIfUncontrolled = useCallback(
    (newValue: boolean) => {
      if (!isControlled) {
        setValue(newValue)
      }
    },
    [isControlled]
  )

  return [value as boolean, setValueIfUncontrolled]
}
