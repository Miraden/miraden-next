import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M 9 0.75 C 4.4525399 0.75 0.75 4.4525399 0.75 9 C 0.75 13.547423 4.4525351 17.25 9 17.25 C 13.547428 17.25 17.25 13.547428 17.25 9 C 17.25 4.4525351 13.547423 0.75 9 0.75 z M 9 2.25 C 12.736759 2.25 15.75 5.2632014 15.75 9 C 15.75 12.736754 12.736754 15.75 9 15.75 C 5.2632014 15.75 2.25 12.736759 2.25 9 C 2.25 5.2631966 5.2631966 2.25 9 2.25 z M 11.75 6.5 A 0.75 0.75 0 0 0 11.21875 6.71875 L 8.5 9.4375 L 7.40625 8.34375 A 0.75 0.75 0 0 0 6.34375 8.34375 A 0.75 0.75 0 0 0 6.34375 9.40625 L 7.96875 11.03125 A 0.750075 0.750075 0 0 0 9.03125 11.03125 L 12.28125 7.78125 A 0.75 0.75 0 0 0 12.28125 6.71875 A 0.75 0.75 0 0 0 11.75 6.5 z "
const filledPath = "M 12 2 C 6.4771555 2 2 6.4771555 2 12 C 2 17.522794 6.4771555 22 12 22 C 17.522794 22 22 17.522794 22 12 C 22 6.4771555 17.522794 2 12 2 z M 14.990234 9.0039062 C 15.246134 9.0000875 15.503022 9.0947846 15.701172 9.2871094 C 16.097471 9.671759 16.107256 10.304872 15.722656 10.701172 L 11.839844 14.701172 C 11.651544 14.895172 11.393447 15.003906 11.123047 15.003906 C 10.852747 15.003906 10.592597 14.895172 10.404297 14.701172 L 8.2871094 12.519531 C 7.9024598 12.123232 7.9122941 11.490168 8.3085938 11.105469 C 8.7049034 10.720869 9.3380066 10.7287 9.7226562 11.125 L 11.123047 12.568359 L 14.287109 9.3085938 C 14.479459 9.1104439 14.734335 9.007725 14.990234 9.0039062 z "

const strokeBigPath = ""
const filledBigPath = "M 12 2 C 6.477161 2 2 6.477161 2 12 C 2 17.522788 6.477161 22 12 22 C 17.522788 22 22 17.522788 22 12 C 22 6.477161 17.522788 2 12 2 z M 16.5 8.5078125 C 16.755925 8.5078125 17.011781 8.6055216 17.207031 8.8007812 C 17.597531 9.1913106 17.597531 9.8243229 17.207031 10.214844 L 11.707031 15.714844 C 11.316533 16.105342 10.683467 16.105342 10.292969 15.714844 L 7.2929688 12.714844 C 6.9024494 12.324344 6.9024494 11.691281 7.2929688 11.300781 C 7.683498 10.910283 8.316502 10.910283 8.7070312 11.300781 L 11 13.59375 L 15.792969 8.8007812 C 15.988219 8.6055216 16.244075 8.5078125 16.5 8.5078125 z "

const CheckIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getSmallFilled() : getSmallStroke()}
    </svg>
  );
};

function getSmallStroke(): JSX.Element {
  return (
    <>
      <path
        d={strokePath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getSmallFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

const CheckBigIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getBigFilled() : getBigStoke()}
    </svg>
  );
}

function getBigFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledBigPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getBigStoke(): JSX.Element {
  return (
    <>
      <path
        d={strokeBigPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export {CheckIcon, CheckBigIcon};
