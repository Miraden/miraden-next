import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
  .Container {
    max-width: calc(1170px + 2 * 40px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .FullBleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  @media (max-width: 1280px) {
    .Container {
    padding-left: 20px;
    padding-right: 20px;
  }
  }

  @media (max-width: 960px) {
    .md\\:FullBleed {
      width: 100vw;
      margin-left: calc(50% - 50vw);
    }
  }

  
`;

export { Layout };
