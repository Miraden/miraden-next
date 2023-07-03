import {SVGAttributes} from "react";
import {theme} from "../../styles/tokens";

interface Props {
  filled?: boolean
  attr?: SVGAttributes<SVGElement>
}

const strokePath = ""
const filledPath = "M 12,0 C 5.3723364,0 0,5.3723364 0,12 0,18.627672 5.3723364,24 12,24 18.627672,24 24,18.627672 24,12 L 23.595703,8.8847656 C 22.910407,6.333956 21.403233,4.081013 19.306641,2.4746094 17.210049,0.86821272 14.641288,-0.00204073 12,0 Z m 0,5.5390625 c 0.264,0 0.460937,0.1969387 0.460938,0.4609375 v 6 c 0,0.2549 0.20799,0.460937 0.46289,0.460938 0.2549,0 0.460938,-0.206038 0.460938,-0.460938 0,-0.008 3.98e-4,-0.01557 0,-0.02344 V 7.8457031 c 0,-0.2639988 0.196937,-0.4609375 0.460937,-0.4609375 0.264,0 0.462891,0.1969387 0.462891,0.4609375 v 5.5156249 c -3.99e-4,0.0079 0,0.01547 0,0.02344 0,0.254899 0.206038,0.460937 0.460937,0.460937 0.2549,0 0.460938,-0.206038 0.460938,-0.460937 0,-0.008 3.99e-4,-0.01557 0,-0.02344 v -1.822266 c 0,-0.263996 0.196941,-0.46289 0.460937,-0.46289 0.264,0 0.462891,0.198894 0.462891,0.46289 v 2.769532 c 0.0025,0.546196 -0.1046,1.086697 -0.3125,1.591797 -0.2079,0.505096 -0.512238,0.963309 -0.898438,1.349609 -0.386196,0.3862 -0.846466,0.692491 -1.351562,0.900391 -0.5051,0.207896 -1.045601,0.313043 -1.591797,0.310547 -0.546196,0.0025 -1.086697,-0.102651 -1.591797,-0.310547 C 9.9031354,17.942491 9.442849,17.6362 9.0566406,17.25 8.6704322,16.8637 8.3660823,16.405487 8.1582031,15.900391 c -0.2078892,-0.5051 -0.31494,-1.045601 -0.3125,-1.591797 V 9.6914062 c 0,-0.2639988 0.1988915,-0.4609374 0.4628907,-0.4609374 0.2639988,0 0.4609374,0.1969386 0.4609374,0.4609374 V 12 c 0,0.2549 0.2060384,0.460937 0.4609376,0.460938 0.2548988,0 0.4609374,-0.206038 0.4609374,-0.460938 V 7.8457031 c 0,-0.2639988 0.1989412,-0.4609375 0.4628908,-0.4609375 0.264,0 0.460937,0.1969387 0.460937,0.4609375 V 11.976562 12 c 0,0.2549 0.206038,0.460937 0.460938,0.460938 0.2549,0 0.46289,-0.206038 0.46289,-0.460938 V 6 C 11.539062,5.7360012 11.736,5.5390625 12,5.5390625 Z"

const HandIcon = (props: Props) => {
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

const strokeHelloPath = "M 10.037109 0.25390625 C 9.6389824 0.26118613 9.2404351 0.3946273 8.9121094 0.66015625 C 8.1746169 1.2565945 8.0252272 2.3385513 8.5625 3.1132812 C 8.5535196 3.0967837 8.5481035 3.0869329 8.5390625 3.0703125 L 8.59375 3.1601562 C 8.5825076 3.1449835 8.573196 3.1287045 8.5625 3.1132812 C 9.4007241 4.6531626 9.9800366 5.6682154 10.605469 6.7753906 C 9.4344239 5.6532342 8.2265034 4.4961409 6.46875 2.8476562 C 5.7842604 2.1717055 4.6806671 2.1262482 3.9433594 2.7441406 C 3.1987887 3.3681038 3.0968143 4.4997642 3.71875 5.2460938 C 5.0769137 6.9184451 6.0269931 8.0661046 6.9785156 9.2226562 C 5.9021172 8.4630327 4.8894 7.7388891 3.375 6.7167969 C 2.6287731 6.1513153 1.549711 6.2465577 0.91796875 6.9472656 C 0.26883072 7.6672784 0.31470152 8.7953896 1.0195312 9.4609375 A 0.750075 0.750075 0 0 0 1.0351562 9.4746094 C 2.7232966 10.980155 3.8531949 11.964419 5.0351562 13 C 4.3321752 12.673158 3.8107725 12.427372 2.9414062 12.025391 C 2.9348327 12.022351 2.9323953 12.020636 2.9257812 12.017578 C 2.1069206 11.572355 1.0576921 11.828614 0.54492188 12.617188 C 0.017793472 13.427942 0.22608466 14.53006 1.0117188 15.09375 A 0.750075 0.750075 0 0 0 1.0585938 15.125 L 10.037109 20.591797 A 0.750075 0.750075 0 0 0 10.048828 20.599609 C 12.45232 22.006964 14.9426 22.117026 17.146484 20.847656 C 19.313994 19.599346 20.572365 17.61729 20.748047 15.160156 A 0.750075 0.750075 0 0 0 20.75 15.107422 L 20.75 5.7539062 A 0.750075 0.750075 0 0 0 20.75 5.7519531 C 20.748607 4.7854746 19.978511 3.9762892 19.013672 3.9257812 C 18.058109 3.8757744 17.199081 4.5462362 17.019531 5.4863281 A 0.750075 0.750075 0 0 0 17.011719 5.5429688 C 17.011719 5.5429688 16.8589 6.8434845 16.738281 7.859375 C 14.704467 5.1700424 11.476562 0.90039062 11.476562 0.90039062 A 0.750075 0.750075 0 0 0 11.429688 0.84375 C 11.102403 0.48908908 10.660439 0.29082205 10.207031 0.2578125 C 10.150355 0.25368631 10.093985 0.25286627 10.037109 0.25390625 z M 10.095703 1.7480469 C 10.178228 1.7546274 10.258324 1.7936554 10.322266 1.8613281 C 10.378706 1.9359651 14.159324 6.9353937 16.078125 9.4726562 C 16.191996 9.6232841 16.295819 9.7665634 16.507812 9.90625 C 16.719807 10.045937 17.080157 10.104066 17.310547 10.052734 C 17.54093 10.001404 17.895079 9.7297882 17.998047 9.4902344 C 18.101015 9.2506805 18.097248 9.1167089 18.117188 8.9609375 C 18.244349 7.9650227 18.488082 5.8360935 18.496094 5.765625 C 18.538764 5.5544632 18.716036 5.4124428 18.933594 5.4238281 C 19.118352 5.4334981 19.249745 5.570604 19.25 5.7539062 L 19.25 15.058594 C 19.102962 17.090155 18.210121 18.502368 16.396484 19.546875 C 14.617178 20.5717 12.87794 20.517528 10.806641 19.304688 L 1.8847656 13.871094 C 1.7403463 13.764809 1.7048543 13.584139 1.8027344 13.433594 C 1.8975263 13.287815 2.0713439 13.24929 2.2207031 13.339844 A 0.750075 0.750075 0 0 0 2.2949219 13.378906 C 4.1575064 14.239963 5.6062808 14.91238 6.7460938 15.451172 C 7.0262864 15.583609 7.3438278 15.643469 7.6601562 15.564453 C 7.9764848 15.485433 8.2699481 15.242472 8.3984375 14.9375 C 8.4692134 14.769511 8.4949518 14.532458 8.4511719 14.339844 C 8.4073927 14.147231 8.320856 14.009708 8.2382812 13.898438 C 8.0731317 13.675895 7.8937898 13.518695 7.6445312 13.298828 C 6.2799235 12.095354 4.4017315 10.467289 2.0488281 8.3691406 C 1.9256496 8.2512875 1.9188364 8.0780254 2.0332031 7.9511719 C 2.1538377 7.8173679 2.339129 7.8034135 2.4785156 7.9179688 A 0.750075 0.750075 0 0 0 2.5351562 7.9609375 C 4.6847859 9.4117561 6.3804242 10.60972 7.6503906 11.517578 C 7.9574564 11.737075 8.2724188 11.880066 8.6269531 11.892578 C 8.9814876 11.905088 9.3619318 11.732974 9.5722656 11.470703 C 9.7780441 11.213968 9.8443782 10.740691 9.7441406 10.435547 C 9.6439028 10.130403 9.4810985 9.9099244 9.2617188 9.640625 C 8.1724253 8.3034448 6.6978854 6.537208 4.8769531 4.2949219 A 0.750075 0.750075 0 0 0 4.8710938 4.2871094 C 4.7668715 4.1620382 4.7812223 3.9993065 4.90625 3.8945312 C 5.0601404 3.7655651 5.2712937 3.775028 5.4140625 3.9160156 A 0.750075 0.750075 0 0 0 5.4277344 3.9296875 C 7.705738 6.0659773 9.4896712 7.7582887 10.775391 9.0039062 C 11.02931 9.2499007 11.243488 9.4275042 11.517578 9.5488281 C 11.791669 9.6701521 12.172773 9.6786459 12.423828 9.5839844 C 12.725536 9.4701858 12.995124 9.1918463 13.083984 8.84375 C 13.172844 8.4956537 13.085062 8.1391709 12.914062 7.8339844 C 12.151351 6.4728397 11.11189 4.6632376 9.8554688 2.3535156 A 0.750075 0.750075 0 0 0 9.8007812 2.265625 C 9.6938443 2.1213031 9.7154649 1.9393983 9.8554688 1.8261719 C 9.9282228 1.7673329 10.013178 1.7414663 10.095703 1.7480469 z "
const filledHelloPath = ""

const HandHelloIcon = (props: Props) => {
  return (
    <svg
      width="21px"
      height="22px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.attr}
    >
      {props.filled ? getHelloFilled() : getHelloStroke()}
    </svg>
  );
}

function getHelloStroke(): JSX.Element {
  return (
    <>
      <path
        d={strokeHelloPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

function getHelloFilled(): JSX.Element {
  return (
    <>
      <path
        d={filledHelloPath}
        fill={theme.colors.text.black}
      />
    </>
  )
}

export {HandIcon, HandHelloIcon};