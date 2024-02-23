

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: "Monaco", monospace;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear;
  }
`
