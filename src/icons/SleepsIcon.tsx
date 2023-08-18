import { FC, SVGAttributes } from 'react'

const SleepsIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.778 2.25a.75.75 0 0 1 .75.75v.964h2.175c.124-.376.339-.72.63-1.002a2.562 2.562 0 0 1 1.778-.712H9.89c.662 0 1.302.253 1.778.712.291.281.506.626.63 1.002h2.175V3a.75.75 0 0 1 1.5 0v6.218c.383.116.736.32 1.028.601.477.46.75 1.09.75 1.752v1.715a.75.75 0 0 1-.75.75h-1.028V15a.75.75 0 0 1-1.5 0v-.964H3.528V15a.75.75 0 0 1-1.5 0v-.964H1a.75.75 0 0 1-.75-.75V11.57c0-.662.273-1.292.75-1.752a2.54 2.54 0 0 1 1.028-.6V3a.75.75 0 0 1 .75-.75Zm.75 3.214v3.643h10.944V5.464h-2.805a.75.75 0 0 1-.75-.75.934.934 0 0 0-.292-.672 1.062 1.062 0 0 0-.736-.292H8.11c-.281 0-.546.108-.736.292a.934.934 0 0 0-.292.672.75.75 0 0 1-.75.75H3.528Zm-.75 5.143c-.281 0-.546.108-.737.292a.934.934 0 0 0-.291.672v.965H16.25v-.965a.934.934 0 0 0-.291-.672 1.062 1.062 0 0 0-.737-.292H2.778Z"
        fill="#7786A5"
      />
    </svg>
  )
}

export { SleepsIcon }
