import { FC, SVGAttributes } from 'react'
import { theme } from '../../styles/tokens'

const LikeIcon: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 5.8964844,2.25 C 5.0245469,2.2577389 4.1733691,2.5230645 3.4511719,3.0117188 2.7289661,3.5003706 2.1674115,4.1915255 1.8359375,4.9980469 1.5044747,5.8045581 1.4180285,6.6896414 1.5878906,7.5449219 1.7577387,8.4002044 2.1765038,9.1879885 2.7910156,9.8066406 l 5.6757813,5.7207034 a 0.750075,0.750075 0 0 0 1.0664062,0 L 15.208984,9.8066406 C 16.036323,8.9760773 16.5,7.8518905 16.5,6.6796875 16.5,5.5084046 16.037057,4.3831079 15.210938,3.5527344 14.804123,3.1399328 14.319736,2.813549 13.785156,2.5898438 13.250571,2.3661243 12.677241,2.25 12.097656,2.25 11.51815,2.25 10.944778,2.3661088 10.410156,2.5898438 9.8821159,2.8108123 9.4036986,3.135388 9,3.5410156 8.1777344,2.7227654 7.066695,2.2570437 5.90625,2.25 a 0.750075,0.750075 0 0 0 -0.00977,0 z m 6.2011716,1.5 c 0.380814,0 0.758161,0.075676 1.109375,0.2226563 0.351219,0.1469743 0.668362,0.3616947 0.935547,0.6328124 a 0.750075,0.750075 0 0 0 0.0039,0.00391 C 14.694145,5.1591703 15,5.9036325 15,6.6796875 15,7.4557425 14.694145,8.1982516 14.146484,8.7480469 A 0.750075,0.750075 0 0 0 14.144531,8.75 L 9,13.935547 3.8554688,8.75 a 0.750075,0.750075 0 0 0 0,-0.00195 C 3.4488416,8.33868 3.1709854,7.8198623 3.0585938,7.2539062 2.9461962,6.6879681 3.0033196,6.1020468 3.2226563,5.5683594 3.4420017,5.0346621 3.8131226,4.5772536 4.2910156,4.2539062 4.767155,3.9317401 5.3275724,3.7582903 5.9023437,3.7519531 6.6720113,3.7578138 7.4076014,4.0642629 7.9511719,4.609375 a 0.750075,0.750075 0 0 0 0.00391,0.00391 C 8.1098525,4.7664342 8.2456015,4.938149 8.3574219,5.125 a 0.750075,0.750075 0 0 0 1.2871094,0 C 9.7563517,4.938149 9.8901475,4.7664342 10.044922,4.6132812 a 0.750075,0.750075 0 0 0 0.0059,-0.00586 c 0.267257,-0.2711661 0.5863,-0.4877991 0.9375,-0.6347656 C 11.339458,3.8256916 11.716963,3.75 12.097656,3.75 Z"
        fill={theme.colors.text.black}
      />
    </svg>
  )
}

export { LikeIcon }
