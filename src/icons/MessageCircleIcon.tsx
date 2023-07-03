import { FC, SVGAttributes } from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: FC<SVGAttributes<SVGElement>>
}

const strokePath: string = "M 9 0.72851562 C 4.4525399 0.72851562 0.75 4.4310556 0.75 8.9785156 C 0.75 10.333049 1.0773844 11.616477 1.6582031 12.746094 C 1.6706911 12.770374 1.6669488 12.782187 1.6679688 12.779297 L 0.97265625 14.75 C 0.52755302 16.009717 1.818447 17.300643 3.078125 16.855469 L 4.96875 16.1875 C 4.96619 16.188403 4.9809644 16.185399 5.0058594 16.199219 C 6.1895629 16.855468 7.5536837 17.228516 9 17.228516 C 13.547428 17.228516 17.25 13.525944 17.25 8.9785156 C 17.25 4.4310508 13.547423 0.72851562 9 0.72851562 z M 9 2.2285156 C 12.736759 2.2285156 15.75 5.2417171 15.75 8.9785156 C 15.75 12.71527 12.736754 15.728516 9 15.728516 C 7.8115416 15.728516 6.7005744 15.423466 5.7324219 14.886719 C 5.3597983 14.680122 4.9018178 14.621135 4.4707031 14.773438 L 2.578125 15.441406 C 2.4111059 15.500431 2.3276829 15.417082 2.3867188 15.25 L 3.0820312 13.279297 C 3.2286707 12.864412 3.1795395 12.424864 2.9921875 12.060547 C 2.5173084 11.136969 2.25 10.091577 2.25 8.9785156 C 2.25 5.2417123 5.2631966 2.2285156 9 2.2285156 z M 5.2871094 8.0996094 C 4.7693399 8.0996094 4.3496094 8.5193399 4.3496094 9.0371094 C 4.3496094 9.5548789 4.7693399 9.9746094 5.2871094 9.9746094 C 5.8048689 9.9746094 6.2246094 9.5548789 6.2246094 9.0371094 C 6.2246094 8.5193399 5.8048689 8.0996094 5.2871094 8.0996094 z M 9.0371094 8.0996094 C 8.5193399 8.0996094 8.0996094 8.5193399 8.0996094 9.0371094 C 8.0996094 9.5548789 8.5193399 9.9746094 9.0371094 9.9746094 C 9.5548689 9.9746094 9.9746094 9.5548789 9.9746094 9.0371094 C 9.9746094 8.5193399 9.5548689 8.0996094 9.0371094 8.0996094 z M 12.787109 8.0996094 C 12.26931 8.0996094 11.849609 8.5193399 11.849609 9.0371094 C 11.849609 9.5548789 12.26931 9.9746094 12.787109 9.9746094 C 13.304809 9.9746094 13.724609 9.5548789 13.724609 9.0371094 C 13.724609 8.5193399 13.304809 8.0996094 12.787109 8.0996094 z "
const filledPath: string = "M 9 0.9375 C 4.5472045 0.9375 0.9375 4.5472045 0.9375 9 C 0.9375 10.325399 1.2583724 11.577342 1.8261719 12.681641 C 1.8616918 12.750741 1.8624031 12.816081 1.8457031 12.863281 L 1.1484375 14.833984 C 0.73882391 15.993183 1.8564362 17.110771 3.015625 16.701172 L 4.90625 16.03125 C 4.95537 16.01385 5.0248932 16.017341 5.0957031 16.056641 C 6.252962 16.69824 7.5847714 17.0625 9 17.0625 C 13.452796 17.0625 17.0625 13.452796 17.0625 9 C 17.0625 4.5472045 13.452796 0.9375 9 0.9375 z M 8.9394531 8.078125 C 9.4572226 8.078125 9.8769531 8.4978555 9.8769531 9.015625 C 9.8769531 9.5333945 9.4572226 9.953125 8.9394531 9.953125 C 8.4216936 9.953125 8.0019531 9.5333945 8.0019531 9.015625 C 8.0019531 8.4978555 8.4216936 8.078125 8.9394531 8.078125 z M 5.2871094 8.0996094 C 5.8048789 8.0996094 6.2246094 8.5193399 6.2246094 9.0371094 C 6.2246094 9.5548789 5.8048789 9.9746094 5.2871094 9.9746094 C 4.7693499 9.9746094 4.3496094 9.5548789 4.3496094 9.0371094 C 4.3496094 8.5193399 4.7693499 8.0996094 5.2871094 8.0996094 z M 12.787109 8.0996094 C 13.304809 8.0996094 13.724609 8.5193399 13.724609 9.0371094 C 13.724609 9.5548789 13.304809 9.9746094 12.787109 9.9746094 C 12.26931 9.9746094 11.849609 9.5548789 11.849609 9.0371094 C 11.849609 8.5193399 12.26931 8.0996094 12.787109 8.0996094 z "

const MessageCircleIcon = (props: Props) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled && getFilled()}
      {!props.filled && getStroke()}
    </svg>
  );
};

function getStroke(): JSX.Element {
  return (
    <>
      <path
        d={strokePath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export { MessageCircleIcon };