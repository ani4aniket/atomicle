import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/particles/globalStyles";
import themeDefault from "../components/particles/themeDefault";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
