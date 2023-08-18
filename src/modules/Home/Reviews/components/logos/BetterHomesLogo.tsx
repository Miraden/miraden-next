import { FC, SVGAttributes } from 'react'

const BetterHomesLogo: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      width="80"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.59394 39.5356C3.23838 40.2701 3.04489 41.0685 3.02582 41.8797C3.00674 42.6909 3.16251 43.497 3.48316 44.2465C3.80381 44.9961 4.2823 45.6725 4.88805 46.2328C5.49381 46.793 6.21351 47.2247 7.00117 47.5001C6.33218 43.0178 4.63633 40.6259 3.59394 39.5356ZM11.0411 47.5051C11.8769 47.216 12.6367 46.7517 13.266 46.1454C13.8953 45.5391 14.3788 44.8056 14.682 43.9974C14.9852 43.1891 15.1005 42.326 15.0197 41.4696C14.9391 40.6133 14.6642 39.7847 14.215 39.043C13.1778 40.1888 11.482 42.7264 11.0411 47.5051ZM12.8199 40.2641C13.2022 39.7663 13.6387 39.3098 14.1216 38.9024C13.7865 38.384 13.366 37.9223 12.8769 37.5356C11.6635 38.8321 9.62531 41.852 9.28304 47.7513C9.80268 45.0099 11.0182 42.4369 12.8199 40.2641ZM5.22754 40.9827C6.28604 42.2919 7.17596 43.7211 7.87761 45.2388C8.59731 42.9441 9.75675 40.8013 11.2952 38.9225C11.7136 38.3705 12.1936 37.865 12.7266 37.4149C11.6729 36.6167 10.3717 36.1863 9.0341 36.1939C7.92511 36.1931 6.83755 36.4899 5.89196 37.0514C4.94637 37.6128 4.17969 38.417 3.67691 39.3747C4.25966 39.8489 4.78196 40.3887 5.23273 40.9827H5.22754ZM75.5919 59.0977H78.0812V58.5952H76.1313V57.4194H77.7597V56.947H76.1313V55.7611H78.0812V55.2888H75.5919V59.0977ZM69.1353 55.7913H70.5303V55.2888H67.2372V55.7913H68.6167V59.1228H69.1353V55.7913ZM61.9992 57.6555H60.6457L61.3303 55.7913L61.9992 57.6555ZM63.0987 59.1228L61.631 55.2888H61.0243L59.5463 59.1028H60.1012L60.4694 58.0977H62.1756L62.549 59.1028L63.0987 59.1228ZM54.0127 55.7913H55.3871V55.2888H52.1095V55.7913H53.489V59.1228H54.0076L54.0127 55.7913ZM46.8716 58.0827C46.8716 58.4595 46.5085 58.7258 46.0055 58.7258C45.592 58.7159 45.1911 58.5864 44.8541 58.354L44.6778 58.8263C45.0741 59.0629 45.5296 59.1898 45.9951 59.1932C46.1648 59.2127 46.3368 59.1981 46.5004 59.1504C46.664 59.1027 46.8158 59.0229 46.9462 58.9158C47.0766 58.8088 47.1828 58.6769 47.2583 58.5284C47.3338 58.3799 47.3769 58.2179 47.385 58.0525C47.385 57.3239 46.7989 57.0475 46.2233 56.9119C45.6477 56.7761 45.2639 56.6154 45.2639 56.2234C45.2639 55.9068 45.5025 55.6606 46.0677 55.6606C46.437 55.6666 46.7968 55.7748 47.105 55.9721L47.2968 55.53C46.9262 55.3033 46.4956 55.1862 46.0573 55.1932C45.2795 55.1932 44.7401 55.6254 44.7401 56.2636C44.7401 57.0023 45.3624 57.2284 45.9174 57.3791C46.5656 57.5399 46.8716 57.6957 46.8716 58.0827ZM37.0181 59.0877H39.5125V58.5852H37.5782V57.4194H39.2014V56.947H37.5782V55.7611H39.5333V55.2888H37.0388L37.0181 59.0877ZM26.1947 59.0877H28.6322V58.5852H26.7548V55.2888H26.2363L26.1947 59.0877ZM19.9715 57.6204H18.6698L19.318 55.7913L19.9715 57.6204ZM21.0606 59.0877L19.6344 55.2888H19.0173L17.5444 59.1028H18.089L18.4624 58.0977H20.179L20.5419 59.1028L21.0606 59.0877ZM10.1128 59.0877H12.6021V58.5852H10.6781V57.4194H12.3065V56.947H10.6781V55.7611H12.6332V55.2888H10.1439L10.1128 59.0877ZM2.59303 57.0978V55.7461H3.17386C3.77545 55.7461 4.15921 55.937 4.15921 56.3892C4.15921 56.8415 3.791 57.0978 3.15312 57.0978H2.59303ZM2.59303 59.1077V57.6002H3.24647L4.25257 59.1077H4.89564L3.7962 57.4796C4.05487 57.425 4.28485 57.2825 4.44464 57.0779C4.60441 56.8733 4.68343 56.6202 4.66745 56.3641C4.66745 55.6908 4.19033 55.2888 3.29314 55.2888H2.07442V59.1028L2.59303 59.1077ZM2.07442 51.2287V51.7311H78.0812V51.2287H2.07442ZM28.8604 23.0335H27.709V19.9482H27.2527C26.5422 22.0286 25.5984 22.7974 23.5084 23.1541V23.5813H24.8308V29.5761C24.8308 31.5358 25.3806 32.4051 27.2631 32.4051C27.8421 32.3914 28.4056 32.2214 28.8903 31.9142C29.3749 31.607 29.7615 31.1749 30.0065 30.6664L29.6902 30.4102C29.559 30.6295 29.3794 30.8182 29.1643 30.9623C28.949 31.1065 28.7037 31.2029 28.4455 31.2443C27.8595 31.2443 27.709 30.8976 27.709 30.1942V23.5813H30.3902V29.5761C30.3902 31.5358 30.9401 32.4051 32.8226 32.4051C34.1605 32.4051 35.0629 31.7769 35.7889 30.6866L35.4674 30.4303C35.2981 30.6614 35.0803 30.8552 34.8283 30.9989C34.5762 31.1426 34.2957 31.2332 34.0049 31.2645C33.419 31.2645 33.2685 30.9177 33.2685 30.2142V23.5813H35.4934V23.0335H33.2685V19.9482H32.8122C32.5788 20.77 32.1305 21.5194 31.5105 22.124C31.1561 22.4415 30.7376 22.6845 30.2815 22.8376C29.8254 22.9906 29.3416 23.0505 28.8604 23.0134V23.0335ZM79.3103 46.4449C79.1717 46.4578 79.0431 46.5203 78.9495 46.6201C78.8559 46.7201 78.8041 46.8501 78.8041 46.985C78.8041 47.1199 78.8559 47.2499 78.9495 47.3499C79.0431 47.4497 79.1717 47.5122 79.3103 47.5252C79.4489 47.5122 79.5775 47.4497 79.6711 47.3499C79.7647 47.2499 79.8166 47.1199 79.8166 46.985C79.8166 46.8501 79.7647 46.7201 79.6711 46.6201C79.5775 46.5203 79.4489 46.4578 79.3103 46.4449ZM79.3103 47.6357C79.2222 47.6364 79.135 47.6201 79.0535 47.5878C78.9721 47.5555 78.898 47.5078 78.8357 47.4474C78.7735 47.3871 78.7243 47.3153 78.6908 47.2364C78.6574 47.1574 78.6407 47.0728 78.6413 46.9875C78.6392 46.8565 78.6776 46.7279 78.7515 46.6181C78.8253 46.5083 78.9313 46.4224 79.0559 46.3713C79.1805 46.3203 79.3179 46.3064 79.4506 46.3315C79.5833 46.3565 79.7054 46.4195 79.801 46.5121C79.8967 46.6047 79.9615 46.7229 79.9874 46.8516C80.0134 46.9802 79.999 47.1134 79.9463 47.2341C79.8936 47.3547 79.8049 47.4575 79.6916 47.529C79.5783 47.6006 79.4456 47.6377 79.3103 47.6357ZM79.2585 47.2137C79.2585 47.2539 79.2585 47.264 79.3259 47.264V47.3092H79.0199V47.2488C79.0718 47.2488 79.1029 47.2488 79.1029 47.2036V46.7464C79.1029 46.7111 79.1029 46.7111 79.0251 46.7111V46.6609H79.3466C79.4659 46.6609 79.6008 46.6609 79.6008 46.8217C79.5971 46.8659 79.5774 46.9074 79.5451 46.9387C79.5128 46.97 79.47 46.9891 79.4244 46.9926C79.4867 46.9926 79.5178 47.0579 79.5541 47.1181C79.5904 47.1785 79.6422 47.264 79.6837 47.264V47.3092H79.5281C79.4607 47.3092 79.4504 47.2388 79.414 47.1785C79.3778 47.1181 79.3622 47.0327 79.3051 47.0327H79.2585V47.2137ZM79.2585 46.7111V46.9272H79.2999C79.3192 46.9289 79.3386 46.9263 79.3567 46.9198C79.3749 46.9132 79.3912 46.9028 79.4047 46.8893C79.4181 46.8758 79.4283 46.8596 79.4343 46.8418C79.4404 46.824 79.4424 46.8052 79.44 46.7865C79.44 46.7111 79.3985 46.676 79.3155 46.676C79.2844 46.676 79.2792 46.676 79.2792 46.676L79.2585 46.7111ZM75.5816 47.0679C75.5816 47.2036 75.5816 47.3794 75.5816 47.6006H75.7164L75.8149 47.3544C76.1324 47.5577 76.5083 47.6581 76.8884 47.6408C77.0488 47.6582 77.211 47.6435 77.3653 47.5978C77.5195 47.5522 77.6625 47.4763 77.7853 47.3752C77.9082 47.274 78.0084 47.1496 78.0799 47.0094C78.1512 46.8693 78.1923 46.7165 78.2005 46.5604C78.2005 46.0227 77.8635 45.7414 77.0699 45.4951C76.5513 45.3293 76.2091 45.2539 76.2038 44.9373C76.2091 44.8703 76.2281 44.8051 76.2597 44.7453C76.2914 44.6855 76.3351 44.6325 76.3884 44.5894C76.4415 44.5464 76.5031 44.514 76.5694 44.4944C76.6357 44.4747 76.7054 44.4681 76.7744 44.475C77.0192 44.471 77.2576 44.551 77.4474 44.7008C77.6374 44.8507 77.7662 45.0609 77.8115 45.2941H77.962C77.962 45.1183 77.962 44.9575 77.962 44.8168C77.962 44.6761 77.962 44.5103 77.962 44.3494H77.7908L77.6663 44.5605C77.3758 44.3818 77.035 44.2958 76.6914 44.3143C75.9861 44.3143 75.4727 44.6961 75.4882 45.3193C75.5038 45.9424 75.9187 46.1685 76.7225 46.4147C77.153 46.5454 77.407 46.681 77.4123 46.9625C77.4064 47.0349 77.3856 47.1055 77.3513 47.1701C77.317 47.2348 77.2698 47.2922 77.2124 47.3389C77.1548 47.3858 77.0884 47.4209 77.0168 47.4426C76.9451 47.4642 76.8698 47.4718 76.7951 47.465C76.5271 47.4539 76.2708 47.3556 76.0675 47.186C75.8643 47.0164 75.726 46.7854 75.675 46.5303H75.5193C75.5452 46.7313 75.5452 46.9171 75.5505 47.0327L75.5816 47.0679ZM70.7793 46.5654C70.6421 46.7256 70.4722 46.8564 70.2803 46.9499C70.0884 47.0433 69.8787 47.0971 69.6642 47.1082C69.5203 47.1209 69.3753 47.0981 69.243 47.0418C69.1106 46.9856 68.995 46.8978 68.9071 46.7865C68.6934 46.4761 68.6014 46.1018 68.6478 45.7313H70.9141V45.6861C70.9268 45.4916 70.8953 45.2967 70.8218 45.1152C70.7483 44.9338 70.6345 44.7701 70.4887 44.636C70.3428 44.5018 70.1682 44.4003 69.9774 44.3386C69.7865 44.277 69.584 44.2566 69.3842 44.279C69.1417 44.2581 68.8974 44.2864 68.6667 44.362C68.4362 44.4376 68.2243 44.559 68.0448 44.7183C67.8653 44.8775 67.722 45.0713 67.624 45.2873C67.526 45.5033 67.4755 45.7366 67.4757 45.9725C67.4771 46.1995 67.5269 46.424 67.6219 46.6315C67.7169 46.8391 67.8552 47.0253 68.0282 47.1787C68.201 47.332 68.4047 47.4491 68.6264 47.5225C68.8482 47.596 69.0833 47.6243 69.3168 47.6056C69.6381 47.5861 69.949 47.4884 70.221 47.3215C70.493 47.1546 70.7172 46.9239 70.8727 46.6509L70.7793 46.5654ZM69.9132 45.5303H68.6478C68.6738 45.0278 68.8812 44.4399 69.3324 44.4399C69.7836 44.4399 69.9132 44.862 69.9132 45.3745V45.5303ZM60.0597 47.3946V47.5202C60.5161 47.5202 60.8427 47.5202 61.0969 47.5202C61.4599 47.5202 61.8282 47.5202 62.186 47.5202V47.3946C61.7866 47.3946 61.6674 47.3393 61.6674 47.0428V45.5152C61.6674 45.1736 61.9111 44.8419 62.1082 44.8419C62.3052 44.8419 62.3675 45.3443 62.7201 45.3443C62.7816 45.3501 62.8436 45.3431 62.9021 45.3239C62.9605 45.3045 63.0141 45.2734 63.0593 45.2326C63.1044 45.1917 63.1401 45.142 63.1638 45.0867C63.1876 45.0316 63.199 44.972 63.1973 44.9122C63.1973 44.5856 62.9691 44.4098 62.5646 44.4098C62.3618 44.4302 62.1676 44.4999 61.9999 44.6123C61.8321 44.7247 61.6964 44.8762 61.6051 45.0529L61.5378 44.3745C61.0742 44.5184 60.5928 44.6012 60.1064 44.6208V44.7363C60.5056 44.7363 60.5783 44.9223 60.5783 45.3846V47.1181C60.5783 47.3895 60.4746 47.4549 60.096 47.49L60.0597 47.3946ZM57.3889 47.7011C57.809 47.679 58.2035 47.4987 58.4883 47.1986C58.5267 47.348 58.6174 47.4799 58.7452 47.5717C58.873 47.6634 59.0297 47.7091 59.1884 47.7011C59.3601 47.6993 59.5293 47.6605 59.6835 47.5875C59.8378 47.5144 59.9734 47.4091 60.0804 47.279L59.9871 47.1584C59.8885 47.2438 59.8004 47.3342 59.6708 47.3342C59.541 47.3342 59.5307 47.2739 59.5307 47.1282V45.3142C59.5307 44.6861 59.0122 44.3795 58.063 44.3795C57.114 44.3795 56.6317 44.666 56.6317 45.068C56.6309 45.1221 56.6416 45.1757 56.6632 45.2256C56.6848 45.2755 56.7168 45.3205 56.7573 45.3577C56.7977 45.395 56.8457 45.4238 56.8982 45.4422C56.9506 45.4607 57.0065 45.4685 57.0621 45.465C57.4252 45.465 57.5289 45.2137 57.6118 44.9625C57.6949 44.7112 57.7519 44.5353 58.0786 44.5353C58.1398 44.5294 58.2018 44.537 58.2594 44.5577C58.3172 44.5783 58.3693 44.6115 58.4118 44.6546C58.4544 44.6978 58.4861 44.7497 58.5048 44.8065C58.5234 44.8634 58.5284 44.9236 58.5195 44.9825V45.4298C58.5195 45.5655 58.4521 45.6258 58.3224 45.671L57.7779 45.8569C56.9014 46.1634 56.4969 46.4499 56.4969 46.9072C56.4916 47.0195 56.5117 47.1317 56.5554 47.2358C56.5992 47.34 56.6659 47.4339 56.7506 47.5107C56.8354 47.5876 56.9363 47.6458 57.0465 47.6813C57.1567 47.7167 57.2735 47.7286 57.3889 47.7162V47.7011ZM58.4832 45.7966V46.7212C58.4848 46.7865 58.4723 46.8513 58.4465 46.9117C58.4206 46.972 58.382 47.0264 58.3331 47.0714C58.2843 47.1164 58.2263 47.151 58.1627 47.1729C58.0993 47.1948 58.0318 47.2035 57.9645 47.1986C57.9032 47.1924 57.8439 47.1744 57.7899 47.1456C57.736 47.1168 57.6885 47.0779 57.6503 47.031C57.6122 46.9841 57.5841 46.9304 57.5677 46.8729C57.5512 46.8154 57.5468 46.7552 57.5548 46.6961C57.5548 46.2237 57.8504 45.9574 58.4728 45.7866L58.4832 45.7966ZM23.4357 29.3951C23.0681 29.8557 22.6028 30.2347 22.0716 30.5068C21.5403 30.779 20.9552 30.9379 20.3553 30.973C19.8838 30.9895 19.4173 30.8747 19.0111 30.6422C18.6048 30.4098 18.2758 30.0695 18.063 29.6615C17.677 28.8155 17.5115 27.8906 17.5807 26.9681H23.8039V26.8475C23.8039 24.335 22.2482 22.7672 19.5929 22.7672C16.4294 22.7672 14.3342 24.8124 14.3342 27.6615C14.3342 30.4253 16.4087 32.395 19.3958 32.395C20.3094 32.3485 21.1945 32.0719 21.9639 31.5925C22.7335 31.1131 23.3605 30.4475 23.7832 29.6615L23.4357 29.3951ZM21.0658 26.4053H17.5859C17.6481 24.8978 18.1615 23.2546 19.4062 23.2546C20.6509 23.2546 21.0658 24.4556 21.0658 25.9631V26.4053ZM43.7029 29.3951C43.3363 29.8558 42.8722 30.235 42.3418 30.5071C41.8113 30.7793 41.2267 30.9381 40.6275 30.973C40.1558 30.9907 39.6889 30.8765 39.2823 30.6439C38.8758 30.4114 38.5471 30.0702 38.3353 29.6615C37.9368 28.8186 37.7586 27.8935 37.8167 26.9681H44.0814V26.8475C44.0814 24.335 42.5257 22.7672 39.8601 22.7672C36.7017 22.7672 34.6117 24.8124 34.6117 27.6615C34.6117 30.4253 36.6861 32.395 39.6682 32.395C40.5812 32.3492 41.4659 32.0727 42.2346 31.5932C43.0033 31.1137 43.6293 30.4478 44.0503 29.6615L43.7029 29.3951ZM41.3328 26.4053H37.8582C37.9256 24.8978 38.4442 23.2546 39.6837 23.2546C40.9232 23.2546 41.3381 24.4556 41.3381 25.9631L41.3328 26.4053ZM70.1258 39.4702C69.7617 39.9333 69.2981 40.3142 68.7671 40.5866C68.2362 40.8591 67.6504 41.0165 67.0505 41.048C66.5798 41.0667 66.1136 40.9539 65.7073 40.7232C65.3009 40.4925 64.9715 40.1535 64.7582 39.7466C64.3718 38.9025 64.2044 37.9795 64.2708 37.0582H70.494V36.9477C70.494 34.4352 68.9382 32.8674 66.2726 32.8674C63.1143 32.8674 61.0243 34.9226 61.0243 37.7617C61.0243 40.6008 63.0987 42.4952 66.0807 42.4952C66.9914 42.4481 67.8736 42.1717 68.6403 41.6932C69.407 41.2147 70.0317 40.5506 70.4526 39.7667L70.1258 39.4702ZM67.761 36.4854H64.3071C64.3693 34.9778 64.8827 33.3247 66.1273 33.3247C67.3721 33.3247 67.787 34.5306 67.787 36.0431L67.761 36.4854ZM54.6662 46.2841V46.8318C54.6662 47.2689 54.2877 47.5252 53.712 47.5252C52.8511 47.5252 52.2962 46.6257 52.2962 45.4248C52.2962 44.2238 52.8718 43.2993 53.795 43.2993C54.1596 43.2956 54.5131 43.4206 54.7898 43.6508C55.0664 43.8809 55.2473 44.2007 55.2989 44.5504H55.5582L55.4907 43.1485H55.2937C55.2858 43.2223 55.2591 43.2931 55.2159 43.3545C55.1692 43.4349 55.1174 43.5102 55.1174 43.5102C54.6432 43.186 54.0681 43.0297 53.489 43.068C53.0843 43.0559 52.6828 43.1414 52.3208 43.3168C51.9587 43.4923 51.6472 43.7521 51.4146 44.073C51.105 44.4874 50.9447 44.9889 50.9581 45.5001C50.9581 46.8267 51.9954 47.7614 53.4941 47.7614C54.0103 47.7437 54.5179 47.6275 54.9877 47.4197C55.2559 47.3353 55.5427 47.3232 55.8175 47.3845V46.2439C55.8175 45.9222 55.9472 45.8167 56.3776 45.8167V45.6359H54.0387V45.8167H54.1269C54.495 45.8167 54.6455 45.9574 54.6455 46.274L54.6662 46.2841ZM66.0081 47.6809C66.4883 47.5488 66.9794 47.4563 67.4757 47.4046V47.2941C67.1128 47.2941 66.9572 47.2137 66.9572 46.9875V42.9274C66.4179 43.0492 65.8669 43.1149 65.3132 43.1233V43.2289C65.7851 43.2289 65.8992 43.2993 65.8992 43.6107V44.7766C65.7589 44.6358 65.589 44.5257 65.4012 44.4538C65.2134 44.3818 65.0118 44.3497 64.8101 44.3595C64.5888 44.3598 64.37 44.4038 64.1668 44.4887C63.9636 44.5735 63.7803 44.6975 63.6281 44.853C63.4757 45.0085 63.3577 45.1924 63.281 45.3935C63.2043 45.5946 63.1704 45.8086 63.1817 46.0227C63.1604 46.2348 63.1858 46.4487 63.256 46.6506C63.3262 46.8523 63.4398 47.0375 63.5893 47.1937C63.7387 47.3499 63.9207 47.4736 64.123 47.5568C64.3254 47.6399 64.5437 47.6805 64.7634 47.6759C64.9913 47.6892 65.2186 47.6425 65.4213 47.5407C65.624 47.439 65.7945 47.2861 65.9147 47.0981L66.0081 47.6809ZM65.1576 44.666C65.2573 44.6578 65.3577 44.6713 65.4514 44.7054C65.5451 44.7395 65.6297 44.7935 65.6993 44.8632C65.7688 44.9329 65.8214 45.0169 65.8533 45.1087C65.8851 45.2007 65.8956 45.2984 65.8836 45.3946V46.4348C65.8836 46.9926 65.5932 47.289 65.0849 47.289C64.5768 47.289 64.3589 46.7865 64.3589 46.0076C64.3589 45.2288 64.6493 44.666 65.1576 44.666ZM47.7117 47.691C48.1935 47.5579 48.6862 47.4654 49.1845 47.4147V47.3041C48.8215 47.3041 48.666 47.2237 48.666 46.9976V42.9274C48.125 43.0499 47.5722 43.1156 47.0168 43.1233V43.2289C47.4939 43.2289 47.6131 43.2993 47.6131 43.6107V44.7766C47.4717 44.6374 47.3017 44.5283 47.1141 44.4565C46.9266 44.3847 46.7256 44.3516 46.5241 44.3595C46.3028 44.3598 46.0839 44.4038 45.8808 44.4887C45.6776 44.5735 45.4942 44.6975 45.342 44.853C45.1897 45.0085 45.0717 45.1924 44.995 45.3935C44.9182 45.5946 44.8844 45.8086 44.8957 46.0227C44.8746 46.2326 44.8993 46.4444 44.968 46.6444C45.0367 46.8446 45.1479 47.0284 45.2946 47.1843C45.4412 47.34 45.6199 47.4643 45.8192 47.549C46.0185 47.6336 46.2339 47.6769 46.4515 47.6759C46.6785 47.6883 46.9048 47.6411 47.1064 47.5394C47.3081 47.4378 47.4778 47.2853 47.5976 47.0981L47.7117 47.691ZM46.8611 44.6761C46.9611 44.668 47.0616 44.6816 47.1555 44.7156C47.2494 44.7497 47.3344 44.8035 47.4043 44.8732C47.4742 44.9428 47.5272 45.0266 47.5598 45.1185C47.5923 45.2103 47.6035 45.3081 47.5924 45.4047V46.4449C47.5924 47.0026 47.2968 47.2991 46.7938 47.2991C46.2907 47.2991 46.0573 46.7966 46.0573 46.0177C46.0573 45.2388 46.353 44.6761 46.8611 44.6761ZM70.997 47.485V47.6056C71.3238 47.6056 71.635 47.6056 71.9254 47.6056C72.2158 47.6056 72.5373 47.6056 72.9938 47.6056V47.485C72.6255 47.485 72.5373 47.3695 72.5373 47.0378V45.6811C72.5373 45.1233 72.8485 44.7766 73.2893 44.7766C73.5953 44.7766 73.7456 44.9876 73.7456 45.3895V47.0679C73.7456 47.3946 73.6731 47.485 73.3153 47.485V47.6056C73.6835 47.6056 73.9998 47.6056 74.2695 47.6056C74.5392 47.6056 74.9177 47.6056 75.2652 47.6056V47.485C74.8503 47.4549 74.8192 47.3895 74.8192 47.0679V45.5152C74.8192 44.7565 74.4458 44.3795 73.7456 44.3795C73.4952 44.3814 73.249 44.4416 73.0278 44.5554C72.8066 44.6691 72.617 44.8329 72.4751 45.0328L72.4285 44.3795C71.9635 44.519 71.483 44.6033 70.997 44.6308V44.7363C71.3808 44.7363 71.469 44.8318 71.469 45.2388V47.0931C71.469 47.4097 71.4275 47.47 70.997 47.5102V47.485ZM40.5912 47.5102V47.6307C40.9232 47.6307 41.2343 47.6307 41.5247 47.6307C41.8151 47.6307 42.1367 47.6307 42.5931 47.6307V47.5102C42.2196 47.5102 42.1367 47.3946 42.1367 47.063V45.7061C42.1367 45.1484 42.4479 44.8017 42.8887 44.8017C43.1843 44.8017 43.3398 45.0127 43.3398 45.4147V47.0931C43.3398 47.4196 43.262 47.5102 42.9094 47.5102V47.6307C43.2724 47.6307 43.5991 47.6307 43.8688 47.6307C44.1385 47.6307 44.5067 47.6307 44.8645 47.6307V47.5102C44.4393 47.4799 44.4134 47.4147 44.4134 47.0931V45.5152C44.4134 44.7565 44.04 44.3795 43.3398 44.3795C43.0898 44.3791 42.8434 44.4385 42.6227 44.5525C42.4019 44.6665 42.2136 44.8314 42.0744 45.0328L42.0278 44.3795C41.5609 44.5181 41.0787 44.6025 40.5912 44.6308V44.7363C40.975 44.7363 41.0684 44.8318 41.0684 45.2388V47.0931C41.0684 47.4097 41.0269 47.47 40.5912 47.5102ZM37.8893 47.7061C38.3097 47.685 38.7047 47.5045 38.9887 47.2036C39.0273 47.3541 39.1188 47.4866 39.2477 47.5784C39.3765 47.6702 39.5345 47.7153 39.694 47.7061C39.8651 47.705 40.0338 47.6665 40.1873 47.5934C40.3409 47.5203 40.4754 47.4146 40.5808 47.284L40.4823 47.1635C40.3838 47.2488 40.3008 47.3393 40.1712 47.3393C40.0415 47.3393 40.0364 47.279 40.0364 47.1332V45.3142C40.0364 44.6861 39.5177 44.3795 38.5739 44.3795C37.63 44.3795 37.1373 44.666 37.1373 45.068C37.1365 45.1221 37.1473 45.1757 37.1689 45.2256C37.1905 45.2755 37.2225 45.3205 37.2629 45.3577C37.3033 45.395 37.3513 45.4238 37.4037 45.4422C37.4562 45.4607 37.5121 45.4685 37.5678 45.465C37.9204 45.465 38.0241 45.2137 38.0864 44.9625C38.1486 44.7112 38.2368 44.5353 38.5635 44.5353C38.8902 44.5353 38.994 44.6861 38.994 44.9825V45.4298C38.9991 45.4845 38.9835 45.5392 38.9501 45.5835C38.9167 45.628 38.8677 45.6591 38.8124 45.671L38.2575 45.8569C37.3863 46.1634 36.9817 46.4499 36.9817 46.9072C36.9767 47.0191 36.9965 47.1307 37.04 47.2345C37.0835 47.3383 37.1496 47.4318 37.2338 47.5086C37.3179 47.5854 37.4182 47.6437 37.5278 47.6795C37.6374 47.7153 37.7535 47.7278 37.8686 47.7162L37.8893 47.7061ZM38.9628 45.7966V46.7212C38.9645 46.7865 38.952 46.8513 38.9261 46.9117C38.9003 46.972 38.8617 47.0264 38.8128 47.0714C38.7639 47.1164 38.706 47.151 38.6424 47.1729C38.579 47.1948 38.5115 47.2035 38.4443 47.1986C38.382 47.1937 38.3215 47.1765 38.2664 47.1484C38.2113 47.1201 38.1626 47.0814 38.1233 47.0344C38.0841 46.9874 38.055 46.9332 38.038 46.8751C38.0209 46.817 38.0162 46.756 38.0241 46.6961C38.0241 46.2237 38.3249 45.9574 38.942 45.7866L38.9628 45.7966ZM71.2719 40.847C71.2719 41.239 71.272 41.7465 71.246 42.3545H71.7128L71.998 41.646C72.8618 42.2433 73.91 42.5375 74.9696 42.4802C77.1477 42.4802 78.6257 41.239 78.5999 39.4652C78.5999 37.9075 77.7545 37.0884 75.4519 36.3698C73.9531 35.9024 73.1285 35.5809 73.1234 34.6763C73.1234 33.9075 73.8183 33.3247 74.7778 33.3247C76.0586 33.3247 77.0492 33.9478 77.5367 35.6863H77.9516C77.9516 35.1839 77.9257 34.7166 77.9204 34.2995C77.9153 33.8824 77.9204 33.4403 77.9204 32.9629H77.5004L77.153 33.5809C76.4088 33.0798 75.5176 32.8243 74.6117 32.8523C72.6618 32.8523 71.1111 34.0483 71.1267 35.8322C71.1422 37.6159 72.3507 38.1436 74.5599 38.9225C75.706 39.3396 76.3906 39.6913 76.3957 40.5153C76.3922 40.7214 76.3451 40.9244 76.2573 41.1121C76.1696 41.2998 76.0431 41.468 75.8857 41.6065C75.7282 41.7449 75.5431 41.8506 75.3419 41.917C75.1406 41.9835 74.9275 42.0092 74.7155 41.9927C73.0093 41.9927 72.0758 40.7666 71.6038 39.2742H71.1786C71.2253 39.9023 71.2305 40.4098 71.2305 40.8269L71.2719 40.847ZM44.014 41.8772V42.2641C44.7505 42.2239 45.6217 42.2038 46.6071 42.2038C47.5146 42.2038 48.3859 42.2038 49.2519 42.2641V41.8772C48.2614 41.8118 48.1317 41.4702 48.1317 40.4551V36.7718C48.1317 35.1387 49.0342 34.0683 50.0869 34.0683C50.953 34.0683 51.2745 34.5708 51.2745 35.5759V40.6008C51.2745 41.6058 51.0619 41.8621 50.0869 41.8772V42.2641C50.341 42.2641 51.2434 42.2038 52.7577 42.2038C53.5615 42.2038 54.3862 42.2038 55.2523 42.2641V41.8772C54.2824 41.8772 54.1528 41.5304 54.1528 40.4551V36.7718C54.1528 35.1186 55.0396 34.0683 56.1391 34.0683C56.9585 34.0683 57.3007 34.6061 57.3007 35.6764V40.5153C57.3007 41.5907 57.0674 41.8772 56.0924 41.9023V42.2641C56.9118 42.2239 57.8867 42.2038 58.9499 42.2038C59.7796 42.2038 60.5783 42.2038 61.4133 42.2641V41.8772C60.2205 41.8369 60.1634 41.6108 60.1634 40.5153V36.0934C60.1634 33.9377 59.4322 32.8473 57.3422 32.8473C56.6775 32.8593 56.0272 33.0377 55.4547 33.3653C54.8822 33.6928 54.4069 34.1583 54.075 34.7166C53.9037 34.155 53.5427 33.6655 53.05 33.3265C52.5572 32.9875 51.9611 32.8188 51.3575 32.8473C50.6769 32.8577 50.0115 33.0444 49.4306 33.3881C48.8496 33.7318 48.3744 34.2201 48.054 34.802L47.9244 32.8473C46.6616 33.2531 45.3479 33.4914 44.0192 33.5558V33.8724C45.1031 33.8724 45.2535 34.2442 45.2535 35.2744V40.6008C45.2535 41.5505 45.1031 41.7566 44.0037 41.8772H44.014ZM39.0043 32.8875C35.7838 32.8875 33.7716 34.9477 33.7716 37.7165C33.7716 40.4852 35.9445 42.4952 38.9576 42.4952C42.1522 42.4952 44.2941 40.4852 44.2941 37.5608C44.2941 34.8573 42.0174 32.8875 38.9887 32.8875H39.0043ZM39.0562 42.0279C37.433 42.0279 36.9817 40.4049 36.9817 37.7617C36.9817 35.1186 37.5004 33.3598 39.0198 33.3598C40.4409 33.3598 41.1358 35.003 41.1358 37.5406C41.1358 40.3194 40.6172 42.0279 39.0614 42.0279H39.0562ZM17.1658 47.2488V47.691C18.675 47.6508 19.9352 47.6257 20.9724 47.6257C21.7711 47.6257 23.0468 47.6257 24.8049 47.691V47.2488C23.1868 47.1785 22.7305 46.686 22.7305 45.1334V40.3596H29.3064V45.1334C29.3064 46.7865 29.0627 47.2036 27.232 47.2488V47.691C28.7878 47.6508 30.048 47.6257 31.0437 47.6257C31.9357 47.6257 33.2219 47.6257 34.8814 47.691V47.2488C33.2478 47.2186 32.807 46.686 32.807 45.1334V35.5005C32.807 34.0935 33.2115 33.5759 34.7881 33.5759H34.871V33.1086C34.0723 33.179 33.1233 33.179 32.0395 33.179C30.8 33.179 29.2026 33.179 27.2216 33.1086V33.5759C29.1301 33.606 29.296 34.0282 29.296 35.5005V39.6561H22.7512V35.5005C22.7512 34.1186 23.2076 33.5759 24.5612 33.5759H24.8049V33.1086C23.2958 33.1538 22.0148 33.179 20.9724 33.179C19.93 33.179 18.6698 33.179 17.1658 33.1086V33.5759H17.3059C19.0432 33.5759 19.2247 34.0483 19.2247 35.5005V45.1082C19.2247 46.7614 18.9809 47.1785 17.1502 47.2237L17.1658 47.2488ZM43.9259 31.792V32.174C45.1705 32.1337 46.0833 32.1337 46.7212 32.1337C47.7584 32.1337 48.6504 32.1589 49.6202 32.174V31.8122C48.5155 31.8122 48.1421 31.6463 48.1421 30.8072V26.0937C48.1421 25.0888 48.8112 24.134 49.3713 24.134C49.9313 24.134 50.0662 25.6114 51.0411 25.6114C51.2157 25.6247 51.391 25.6015 51.5554 25.5433C51.7198 25.4851 51.8694 25.3933 51.9939 25.2741C52.1184 25.1549 52.2149 25.0111 52.2769 24.8526C52.339 24.694 52.3649 24.5243 52.3532 24.3551C52.3532 23.4205 51.7153 22.8878 50.6159 22.8878C50.0525 22.9543 49.5151 23.156 49.0523 23.4745C48.5896 23.793 48.2161 24.2183 47.9658 24.7119L47.8413 22.8074C46.5821 23.2107 45.2716 23.4441 43.9466 23.5009V23.8225C45.0513 23.8225 45.2639 24.3652 45.2639 25.7068V30.7318C45.2639 31.5157 44.9579 31.7016 43.9259 31.8071V31.792ZM0 32.2192C1.08388 32.1539 2.07442 32.1086 2.98717 32.1086C4.49631 32.1086 5.86542 32.2192 7.08415 32.2192C11.4249 32.2192 13.6445 30.8373 13.6445 28.2897C13.6445 26.0033 11.8709 24.7722 8.6296 24.3853C11.3108 24.0134 12.6903 22.8476 12.6903 21.0738C12.6903 18.7422 10.6781 17.6016 6.57591 17.6016C5.40905 17.6016 4.14884 17.7322 2.74861 17.7322C2.07442 17.7322 1.15131 17.692 0 17.6016V18.0739C1.72178 18.0739 2.07442 18.4759 2.07442 19.9231V29.7268C2.07442 31.2343 1.66991 31.6865 0 31.7117V32.2192ZM6.02101 24.2044C5.86542 24.2044 5.68391 24.2044 5.5024 24.2044V18.6769C5.5024 18.3503 5.56464 18.2649 6.30105 18.2649C8.1421 18.2649 9.01855 19.491 9.01855 21.1693C9.01855 23.2044 8.20434 24.2345 6.00545 24.2345L6.02101 24.2044ZM5.48685 29.0836V24.7923C5.74096 24.7923 6.00545 24.7923 6.21289 24.7923C8.59848 24.7923 9.68755 25.938 9.68755 28.0485C9.68755 30.1589 8.90446 31.5157 7.26047 31.5157C5.92766 31.5157 5.53871 30.8222 5.53871 29.0534"
        fill="#3B4A69"
      />
    </svg>
  )
}

export { BetterHomesLogo }
