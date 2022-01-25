import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body{
    height: 100%;
    width: 100%;
  }

  body{
    font: 400 14px Roboto, sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }

  button{
    cursor: pointer;
  }

`;