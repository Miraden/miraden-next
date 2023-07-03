import { createGlobalStyle } from "styled-components";

const checkColors = {
  odd: "#f8f8f8",
  even: "#eee"
}

const Layout = createGlobalStyle`
  .Container {
    width: 100%;
    max-width: calc(1170px + 2 * 40px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .bodyChecker {
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    background-image: linear-gradient(45deg, ${checkColors.even} 25%, transparent 25%, transparent 75%, ${checkColors.even} 75%, ${checkColors.even} 100%), linear-gradient(45deg, ${checkColors.even} 25%, ${checkColors.odd} 25%, ${checkColors.odd} 75%, ${checkColors.even} 75%, ${checkColors.even} 100%);
  }

  .ContainerFull {
    max-width: calc(1880px + 2 * 20px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .ContainerApp {
    max-width: calc(970px + 2 * 20px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
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

  @media (max-width: 576px) {
    .sm\\:FullBleed {
      width: 100vw;
      margin-left: calc(50% - 50vw);
    }
  }


`;

export { Layout };
