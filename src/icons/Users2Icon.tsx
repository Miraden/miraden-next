import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = "M 10.818359 1.75 C 8.5841147 1.75 6.75 3.5349359 6.75 5.7460938 C 6.75 7.9578464 8.5841147 9.7402344 10.818359 9.7402344 C 13.05266 9.7402344 14.888672 7.9578436 14.888672 5.7460938 C 14.888672 3.5349387 13.05266 1.75 10.818359 1.75 z M 5.9609375 2.5429688 C 4.1860879 2.5429688 2.7148437 3.9698009 2.7148438 5.7324219 C 2.7148438 7.4950427 4.1860879 8.9238281 5.9609375 8.9238281 A 0.75 0.75 0 0 0 6.7109375 8.1738281 A 0.75 0.75 0 0 0 5.9609375 7.4238281 C 4.9785527 7.4238281 4.2148437 6.6652355 4.2148438 5.7324219 C 4.2148438 4.7996081 4.9785527 4.0429688 5.9609375 4.0429688 A 0.75 0.75 0 0 0 6.7109375 3.2929688 A 0.75 0.75 0 0 0 5.9609375 2.5429688 z M 10.818359 3.25 C 12.268852 3.25 13.388672 4.3551161 13.388672 5.7460938 C 13.388672 7.1380167 12.268852 8.2402344 10.818359 8.2402344 C 9.3679521 8.2402344 8.25 7.138014 8.25 5.7460938 C 8.25 4.3551189 9.3679521 3.25 10.818359 3.25 z M 4.7617188 10.076172 C 4.3183161 10.106002 3.8766894 10.168182 3.4394531 10.263672 C 2.7990177 10.38645 1.8820633 10.586606 1.4414062 11.492188 C 1.1870475 12.012481 1.1881872 12.623973 1.4414062 13.144531 C 1.88307 14.055377 2.8053303 14.251509 3.4394531 14.378906 A 0.75 0.75 0 0 0 4.3222656 13.792969 A 0.75 0.75 0 0 0 3.7363281 12.910156 C 3.2505133 12.812554 2.825711 12.561787 2.7910156 12.490234 A 0.750075 0.750075 0 0 0 2.7890625 12.488281 C 2.7355806 12.378641 2.7361226 12.25868 2.7890625 12.150391 A 0.750075 0.750075 0 0 0 2.7890625 12.148438 C 2.8247625 12.075068 3.2493036 11.826115 3.7285156 11.734375 A 0.750075 0.750075 0 0 0 3.7480469 11.730469 C 4.1130539 11.650229 4.4852958 11.59952 4.8613281 11.574219 A 0.75 0.75 0 0 0 5.5605469 10.775391 A 0.75 0.75 0 0 0 4.7617188 10.076172 z M 10.820312 10.601562 C 9.3775957 10.601562 8.0297271 10.698183 6.9394531 11.060547 C 6.3943162 11.241729 5.9021876 11.49268 5.5175781 11.886719 C 5.1329686 12.280756 4.890625 12.840952 4.890625 13.433594 C 4.890625 14.027367 5.1347961 14.588015 5.5214844 14.980469 C 5.9081726 15.372922 6.4034942 15.619917 6.9492188 15.798828 C 8.040668 16.156651 9.3861878 16.25 10.820312 16.25 C 12.263109 16.25 13.608983 16.153479 14.699219 15.791016 C 15.244336 15.609783 15.738461 15.358801 16.123047 14.964844 C 16.507632 14.570886 16.75 14.010497 16.75 13.417969 C 16.75 12.824132 16.503947 12.263522 16.117188 11.871094 C 15.730429 11.478664 15.237169 11.231638 14.691406 11.052734 C 13.599882 10.694928 12.254047 10.601563 10.820312 10.601562 z M 10.820312 12.101562 C 12.180071 12.101562 13.424462 12.21427 14.224609 12.476562 C 14.624683 12.607708 14.900803 12.773633 15.048828 12.923828 C 15.196853 13.074023 15.25 13.184907 15.25 13.417969 C 15.25 13.651938 15.19656 13.76664 15.048828 13.917969 C 14.901099 14.069298 14.625304 14.23462 14.226562 14.367188 C 13.429077 14.632322 12.186809 14.75 10.820312 14.75 C 9.4601418 14.75 8.2160227 14.635323 7.4160156 14.373047 C 7.0160121 14.241909 6.7378082 14.077905 6.5898438 13.927734 C 6.4418794 13.777565 6.390625 13.666719 6.390625 13.433594 C 6.390625 13.199337 6.4440941 13.084917 6.5917969 12.933594 C 6.7394993 12.78227 7.0133907 12.616893 7.4121094 12.484375 C 8.2095466 12.219339 9.4537539 12.101562 10.820312 12.101562 z "
const filledPath = ""

const Users2Icon = (props: Props) => {
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

export { Users2Icon };
