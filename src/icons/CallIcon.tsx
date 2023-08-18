import { SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath =
  'M 5.0253906,1.5039062 C 4.3881859,1.4944896 3.7525866,1.7278822 3.2714844,2.2089844 L 2.3066406,3.1738281 C 1.264365,4.2161109 1.326805,5.863787 1.9335937,7.5175781 c 0.6067888,1.6537911 1.8005157,3.4509269 3.4492188,5.0996099 1.648705,1.64872 3.445815,2.842418 5.0996095,3.449218 1.653794,0.6068 3.301496,0.669279 4.34375,-0.373047 l 0.964844,-0.964843 c 0.962319,-0.962175 0.926339,-2.546177 -0.03906,-3.511719 L 14.257813,9.7207031 C 13.29226,8.7551932 11.706375,8.7194354 10.744141,9.6816406 l -0.207032,0.2070313 c -0.09181,0.091807 -0.222118,0.1076216 -0.335937,0.013672 -0.375175,-0.3095968 -0.7461843,-0.6426592 -1.1035157,-1 -0.3573503,-0.3573408 -0.6904129,-0.7283526 -1,-1.1035157 -0.09397,-0.113875 -0.078165,-0.2440985 0.013672,-0.3359375 L 8.3183594,7.2558594 C 9.280573,6.2936602 9.2448251,4.7077158 8.2792969,3.7421875 L 6.7832031,2.2480469 C 6.3004377,1.7652815 5.6625954,1.5133229 5.0253906,1.5039062 Z m -0.013672,1.4921876 c 0.2502544,0.00482 0.5057337,0.1072961 0.7109375,0.3125 L 7.21875,4.8027344 c 0.4104104,0.4104103 0.4093475,1.0203455 0.039063,1.390625 L 7.0507812,6.4023437 c -0.6275828,0.6276004 -0.6838843,1.6553584 -0.109375,2.3515626 0.3352123,0.4062161 0.6973811,0.814579 1.0937501,1.2109375 0.3963678,0.3963782 0.8047331,0.7585472 1.2109375,1.0937502 0.6961802,0.574649 1.7239702,0.518217 2.3515622,-0.109375 l 0.208985,-0.207031 c 0.370364,-0.370354 0.980178,-0.371367 1.390625,0.03906 l 1.49414,1.496094 c 0.410397,0.410456 0.409342,1.020401 0.03906,1.390625 l -0.964844,0.964844 C 13.342181,15.056286 12.380635,15.164777 11,14.658203 9.6193649,14.151629 7.9593212,13.072617 6.4433594,11.556641 4.9274056,10.040706 3.848362,8.3806334 3.3417969,7 2.8352318,5.6193666 2.9437246,4.6578408 3.3671875,4.234375 L 4.3320312,3.2695313 C 4.5171784,3.0843841 4.7614644,2.9912755 5.0117187,2.9960938 Z'
const filledPath =
  'M14.2965 15.1637C12.8308 16.6295 9.07712 15.2522 5.91245 12.0875C2.74779 8.92288 1.37054 5.16921 2.83628 3.70346L3.80135 2.73839C4.4676 2.07214 5.56541 2.08975 6.25338 2.77772L7.74819 4.27254C8.43616 4.96051 8.45378 6.05832 7.78753 6.72456L7.58024 6.93185C7.22053 7.29157 7.18534 7.87186 7.51958 8.2769C7.84198 8.66759 8.18955 9.05674 8.56641 9.43359C8.94326 9.81045 9.33241 10.158 9.7231 10.4804C10.1281 10.8147 10.7084 10.7795 11.0681 10.4198L11.2754 10.2125C11.9417 9.54622 13.0395 9.56384 13.7275 10.2518L15.2223 11.7466C15.9102 12.4346 15.9279 13.5324 15.2616 14.1986L14.2965 15.1637Z'

const CallIcon = (props: Props) => {
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

export { CallIcon }
