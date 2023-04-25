import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Colors, Fonts, Layout, Utils, theme } from "../styles/tokens";
import { Global } from "./Global";
import { Reset } from "./Reset";

interface Props {
  children: any;
}

const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Colors />
      <Fonts />
      <Layout />
      <Utils />
      <Reset />
      <Global />
      {children}
    </ThemeProvider>
  );
};

export { StylesProvider };
