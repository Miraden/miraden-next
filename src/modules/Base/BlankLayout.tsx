import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

export const BlankLayout = ({ children, className }: Props) => {
  return (
    <>
      <main className={className}>{children}</main>
    </>
  )
}
