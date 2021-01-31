import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #ba7ba1;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }


`;

export default GlobalStyles;
