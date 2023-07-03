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
    display: flex;
    flex-direction: column;

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

  #__next {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
  }
`;

export { Global };
