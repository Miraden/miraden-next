import { FC, SVGAttributes } from 'react'

const MessageIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 3a3 3 0 0 0-3 3v9.69l2.12-1.697a2.25 2.25 0 0 1 1.406-.493h6.974a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-7.5ZM.75 6a4.5 4.5 0 0 1 4.5-4.5h7.5a4.5 4.5 0 0 1 4.5 4.5v4.5a4.5 4.5 0 0 1-4.5 4.5H5.776a.75.75 0 0 0-.468.164l-2.121 1.697c-.982.786-2.437.086-2.437-1.171V6Zm6.771-.505a.75.75 0 0 1-.049 1.06l-.763.695h4.371c.922 0 1.67.748 1.67 1.67V10a.75.75 0 0 1-1.5 0V8.92a.17.17 0 0 0-.17-.17H6.71l.763.696a.75.75 0 0 1-1.01 1.108L4.654 8.908a1.22 1.22 0 0 1 0-1.816l1.806-1.646a.75.75 0 0 1 1.06.049Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { MessageIcon }
