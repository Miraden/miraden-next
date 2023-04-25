import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
  .Container {
    max-width: calc(1170px + 2 * 40px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  
`;

export { Layout };
