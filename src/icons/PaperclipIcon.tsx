import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath =
  'm 12.214546,1.9949515 c -0.769343,-6e-7 -1.538458,0.2923377 -2.121094,0.875 L 3.9938432,8.9676077 c -1.6046143,1.6046513 -1.6046306,4.2293783 0,5.8339853 1.6046315,1.604606 4.2293616,1.60461 5.8339843,0 L 14.86689,9.7644827 a 0.75,0.75 0 0 0 0,-1.0605469 0.75,0.75 0 0 0 -1.060547,0 L 8.7672806,13.741046 c -1.031392,1.031384 -2.6814874,1.031387 -3.7128906,0 -1.031404,-1.031389 -1.0314204,-2.679494 0,-3.710938 l 6.099609,-6.0996096 c 0.592004,-0.592032 1.529135,-0.5920124 2.121094,0 0.592084,0.5920707 0.592084,1.5290229 0,2.1210937 L 7.101265,12.225421 c -0.1527153,0.1527 -0.3785346,0.1527 -0.53125,0 -0.1527911,-0.152813 -0.1526932,-0.376618 0,-0.529297 l 5.115234,-5.1132819 a 0.75,0.75 0 0 0 0,-1.0605469 0.75,0.75 0 0 0 -1.0625,0 L 5.5094682,10.635577 c -0.7259849,0.725918 -0.7258871,1.924404 0,2.65039 v 0.002 c 0.7259629,0.725896 1.9263808,0.725896 2.6523437,0 L 14.33564,7.112139 c 1.165311,-1.1652858 1.165311,-3.0769019 0,-4.2421875 -0.58262,-0.5826721 -1.351751,-0.8749995 -2.121094,-0.875 z'
const filledPath = ''

const PaperclipIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getFilled() : getStroke()}
    </svg>
  )
}

function getFilled(): JSX.Element {
  return (
    <>
      <path d={filledPath} fill={theme.colors.text.black} />
    </>
  )
}

function getStroke(): JSX.Element {
  return (
    <>
      <path d={strokePath} fill={theme.colors.text.black} />
    </>
  )
}

const PaperClip24Icon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      <path
        d="M18.2628 11.899L11.5453 18.6166C9.7879 20.3739 6.93866 20.3739 5.1813 18.6166C3.42394 16.8592 3.42394 14.01 5.1813 12.2526L13.313 4.12087C14.4846 2.94929 16.3841 2.94929 17.5557 4.12087C18.7272 5.29244 18.7272 7.19193 17.5557 8.36351L9.32293 16.5963C8.73714 17.182 7.78739 17.182 7.20161 16.5963C6.61582 16.0105 6.61582 15.0607 7.20161 14.4749L14.0201 7.6564"
        stroke={theme.colors.text.black}
        strokeWidth="1.5"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  )
}

export { PaperclipIcon, PaperClip24Icon }
