import {FC} from "react";
import {ThemeProvider} from "styled-components";
import {Colors, Fonts, Layout, Utils, theme} from "./tokens";
import {Global} from "./Global";
import {Reset} from "./Reset";
import {Icons} from "./tokens/Icons";

interface Props {
  children: any;
}

const StylesProvider: FC<Props> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Colors/>
      <Fonts/>
      <Layout/>
      <Utils/>
      <Reset/>
      <Global/>
      <Icons/>
      {children}
    </ThemeProvider>
  );
};

export {StylesProvider};
