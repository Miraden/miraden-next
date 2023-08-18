import { SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath =
  'M 10.800781 2.7011719 C 9.6008038 2.7011719 8.475389 3.150783 7.6503906 4.0507812 C 6.450393 5.175779 5.9992196 6.8253938 6.4492188 8.4003906 L 2.8496094 12 C 2.6996096 12.15 2.625 12.301172 2.625 12.451172 L 2.4003906 14.775391 C 2.4003906 15.000389 2.4750003 15.225 2.625 15.375 C 2.7749997 15.525 2.9253911 15.599609 3.1503906 15.599609 L 3.2246094 15.599609 L 5.5507812 15.375 C 5.700781 15.375 5.9250002 15.300389 6 15.150391 L 9.5996094 11.550781 C 11.174586 12.000781 12.824221 11.550779 13.949219 10.425781 C 14.774217 9.6007732 15.300781 8.4753782 15.300781 7.2753906 C 15.300781 6.0003932 14.774217 4.8757796 13.949219 4.0507812 C 13.124221 3.225783 12.000779 2.7011719 10.800781 2.7011719 z M 10.734375 4.1816406 C 11.512493 4.1816406 12.300391 4.4628918 12.900391 5.0253906 C 13.500389 5.6253894 13.800781 6.3750014 13.800781 7.125 C 13.800781 8.0249982 13.425389 8.7750012 12.900391 9.375 C 12.150391 10.124998 11.024587 10.425 9.9746094 10.125 C 9.8996094 10.125 9.8249998 10.050781 9.75 10.050781 C 9.4500006 9.9007718 9.1507808 9.9761722 8.9257812 10.201172 L 5.1757812 13.951172 L 3.9746094 14.025391 L 4.0507812 12.826172 L 7.8007812 9.0761719 C 8.0257808 8.8511723 8.0992184 8.4749996 7.9492188 8.25 C 7.9492188 8.1750002 7.875 8.1003806 7.875 8.0253906 L 7.875 7.9511719 C 7.5750006 6.9011739 7.8750014 5.7753892 8.625 5.0253906 C 9.1874988 4.4628918 9.9562566 4.1816406 10.734375 4.1816406 z M 11.585938 5.625 C 11.189672 5.6450875 10.875 5.9737349 10.875 6.375 C 10.875 6.7892092 11.2108 7.125 11.625 7.125 C 12.0392 7.125 12.375 6.7892092 12.375 6.375 C 12.375 5.9607908 12.0392 5.625 11.625 5.625 C 11.612056 5.625 11.598719 5.624352 11.585938 5.625 z '
const filledPath = ''

const KeyIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getFilled() : getStroke()}
    </svg>
  )
}

function getStroke(): JSX.Element {
  return (
    <>
      <path d={strokePath} fill={theme.colors.text.black} />
    </>
  )
}

function getFilled(): JSX.Element {
  return (
    <>
      <path d={filledPath} fill={theme.colors.text.black} />
    </>
  )
}

export { KeyIcon }
