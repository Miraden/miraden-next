import React from 'react'
import cn from 'classnames'

export interface FormFieldProps {
  className?: string
}

const FormField = (
  props: React.PropsWithChildren<FormFieldProps>
): JSX.Element => {
  return (
    <div className={cn('FormField', props.className)}>{props.children}</div>
  )
}

export default FormField
