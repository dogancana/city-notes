import { createGlobalStyle } from "styled-components";
import { Color } from "./color-scheme";

export const GlobalStyle = createGlobalStyle`
  html {
    min-width: 320px;
    background-color: ${Color.platinum};
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    padding: 0;
    margin: 0;
  }

  #__next {
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
