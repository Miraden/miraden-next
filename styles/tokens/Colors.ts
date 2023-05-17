import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  .Color_primary {
    color: #2A344A;
  }

  .Color_blue_primary {
    color: #4E6AF3;
    background-color: transparent;
  }

  .Color_text_disabled {
    color: #B8C6E3;
  }

  .Color_text_grey {
    color: #7786A5;
  }

  .Color_white {
    color: #ffffff
  }

  .Color_grey_dark {
    color: #3B4A69;
  }

  .Color_green {
    color: #0AB258;
  }
`;

export { Colors };
