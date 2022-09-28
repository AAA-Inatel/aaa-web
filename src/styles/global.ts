import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background-image: url("background.png");
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat; 
    background-size: cover;
    font-family: Imperator, Helvetica, Sans-Serif;
    overflow: hidden;
  }

`;

export default GlobalStyle;
