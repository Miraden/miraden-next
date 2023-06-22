import { createGlobalStyle } from "styled-components";
import {theme} from "./tokens";

const Global = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;

    button, input:hover {
      cursor: pointer;
    }

    button {
      padding: 0;
      border: none;
      background: transparent;
    }
  }

  body > div[data-test-id=overlay-container] {
    z-index: 100;
  }
`;

export { Global };
