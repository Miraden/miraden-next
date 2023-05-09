import { FC, SVGAttributes } from "react";

const KnightLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38.78 18.112a1.765 1.765 0 0 0-1.266-.562c-1.75 0-2.326 1.51-2.326 2.931 0 1.325.598 2.636 2.249 2.636.453 0 .983-.252 1.152-.526v.46c0 .82-.07 1.213-1.175 1.213-.53 0-1.152-.185-1.697-.459l-.36.985c.714.34 1.39.548 2.134.548.576 0 1.39-.09 1.911-.526.553-.437.576-1.214.576-1.97l.008-5.307-1.098.17c0-.015-.084.289-.107.407Zm-.191 2.777c0 .251-.023.503-.123.71a.72.72 0 0 1-.668.415c-.883 0-.983-.592-.983-1.718 0-1.007.192-1.599.96-1.599.384 0 .668.185.814.34v1.852ZM33.36 31.075l.008-1.828c0-.563-.023-.733-.1-.963-.215-.592-.86-.94-1.82-.94-.53 0-1.005.089-1.558.318a7.666 7.666 0 0 0-.89.452l.545.933c.675-.407 1.205-.57 1.681-.57.553 0 .683.237.683.829v.207h-.345c-1.797 0-2.703.592-2.703 1.851 0 .977.553 1.584 1.613 1.68h.598a2.05 2.05 0 0 0 .853-.28c.122-.067.238-.186.36-.304.123.23.354.444.615.584l.176.082.077-.081.76-.785c-.499-.363-.553-.63-.553-1.185Zm-2.265.963c-.383 0-.644-.296-.644-.711 0-.644.337-.881 1.366-.881h.085v1.258a1.12 1.12 0 0 1-.807.334ZM6.206 15.714H.24v5.708l3.002 2.88 5.973-5.709-3.01-2.88Z"
        fill="#3B4A69"
      />
      <path
        d="M.24 27.181v5.715h5.966l3.01-2.88-5.974-5.715-3.002 2.88ZM12.217 32.896h5.934v-5.76l-2.963-2.835-5.973 5.716 3.002 2.88ZM9.215 18.593l5.973 5.708 2.963-2.835v-5.752h-5.934l-3.002 2.88ZM49.729 22.08c-.261.067-.384.119-.522.119-.507 0-.645-.185-.645-.874v-2.702h.929l.384-.985h-1.313V16.15l-1.459.23v1.259h-.576v.984h.576v2.932c0 .503 0 .592.092.829.17.481.768.8 1.505.8.384 0 .79-.09 1.22-.252l-.191-.852ZM22.581 19.215l2.311 3.828h1.95l-2.648-3.939 2.387-3.39h-1.82l-2.18 3.346v-3.346h-1.55v7.329h1.55v-3.828ZM29.745 18.734c.406 0 .522.252.522.866v3.435h1.435v-3.93c0-.349-.023-.57-.092-.778-.169-.46-.744-.777-1.366-.777-.338 0-.714.066-1.006.23a2.004 2.004 0 0 0-.645.502l-.092-.718-1.244.193v5.286h1.482v-3.184c0-.392.123-.666.315-.844.215-.185.453-.28.69-.28ZM32.823 23.043h1.49v-5.516l-1.49.223v5.293ZM44.155 17.505c-.645 0-1.198.23-1.605.66 0-.067.023-.393.023-.549V15.58l-1.505.237v7.233h1.505v-2.983c0-.504.07-.792.238-.985.223-.252.599-.392.937-.392.43 0 .576.23.576.733v3.62h1.435v-3.776c0-.526-.023-.688-.146-.985-.169-.48-.737-.777-1.458-.777ZM33.575 15.277c-.507 0-.914.392-.914.88 0 .49.407.882.914.882.507 0 .914-.393.914-.881 0-.481-.407-.881-.914-.881ZM21.015 32.86h1.505v-3.25h1.965v-1.185H22.52v-1.718h2.441l.192-1.17h-4.138v7.322ZM26.712 28.166l-.146-.733-1.197.185v5.241h1.481v-3.346c0-.274.046-.503.215-.681a.925.925 0 0 1 .653-.252c.169 0 .36.045.506.111l.377-1.258c-.238-.089-.338-.111-.553-.111-.553 0-1.098.481-1.336.844ZM40.163 25.678v7.181h1.482v-7.41l-1.482.23Z"
        fill="#3B4A69"
      />
      <path
        d="M44.9 27.455h-1.797l-1.459 2.34 1.928 3.064h1.735l-2.227-3.131 1.82-2.273ZM37.583 27.366c-.338 0-.722.067-1.006.23a2.004 2.004 0 0 0-.645.503l-.092-.718-1.244.192v5.286h1.482v-3.183c0-.392.123-.666.315-.851.215-.185.453-.274.69-.274.408 0 .53.251.53.873v3.435h1.436v-3.938c0-.34-.023-.57-.092-.777-.176-.452-.752-.778-1.374-.778Z"
        fill="#3B4A69"
      />
    </svg>
  );
};

export { KnightLogo };