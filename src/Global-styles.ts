import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #149911;
    --primary-hover: #19B416;
    --primary-dark: #256D1B;

    --text-color-light: #FFFFFF;
    --text-color-dark: #333;

    --background-color: #424342;
    --button-background: #C4C4C4;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
  }

  .page-container {
    width: 100vw;
    height: 100vh;
  }

  .full {
    width: 100%;
    height: 100%;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`