import {FC, SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "m 5.25,2.25 c -2.4763967,0 -4.5,2.0236033 -4.5,4.5 v 4.5 c 0,2.476421 2.0236106,4.5 4.5,4.5 h 7.5 c 2.476414,0 4.5,-2.023586 4.5,-4.5 v -4.5 c 0,-2.4763894 -2.023579,-4.5 -4.5,-4.5 z m 0,1.5 h 7.5 c 1.665775,0 3,1.3342536 3,3 v 4.5 c 0,1.665782 -1.334218,3 -3,3 h -7.5 c -1.6657464,0 -3,-1.334225 -3,-3 v -4.5 c 0,-1.6657392 1.3342608,-3 3,-3 z M 4.3945312,6.0078125 A 0.75,0.75 0 0 0 3.9003906,6.3007812 0.75,0.75 0 0 0 4.0507812,7.3496094 l 3.5996094,2.7011716 c 0.7973331,0.598004 1.9018857,0.598004 2.6992184,0 l 3.59961,-2.7011716 A 0.75,0.75 0 0 0 14.099609,6.3007812 0.75,0.75 0 0 0 13.050781,6.1503906 L 9.4492188,8.8496094 c -0.2693259,0.2019956 -0.6291117,0.2019956 -0.8984375,0 L 4.9492187,6.1503906 A 0.75,0.75 0 0 0 4.3945312,6.0078125 Z"
const filledPath = "M0.9375 6.75C0.9375 4.36827 2.86827 2.4375 5.25 2.4375H12.75C15.1317 2.4375 17.0625 4.36827 17.0625 6.75V11.25C17.0625 13.6317 15.1317 15.5625 12.75 15.5625H5.25C2.86827 15.5625 0.9375 13.6317 0.9375 11.25V6.75ZM4.95 6.15C4.61863 5.90147 4.14853 5.96863 3.9 6.3C3.65147 6.63137 3.71863 7.10147 4.05 7.35L7.35 9.825C8.32778 10.5583 9.67222 10.5583 10.65 9.825L13.95 7.35C14.2814 7.10147 14.3485 6.63137 14.1 6.3C13.8515 5.96863 13.3814 5.90147 13.05 6.15L9.75 8.625C9.30556 8.95833 8.69444 8.95833 8.25 8.625L4.95 6.15Z"

const MailIcon = (props: Props) => {
  return (
    <svg
      width="18px"
      height="18px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getFilled() : getStroke()}
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

export {MailIcon};