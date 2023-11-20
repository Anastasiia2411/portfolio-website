import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(17, 17, 17);

  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: system-ui,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  body {
    margin: 0;
    cursor: none;
    overflow-x: hidden;
  }


  hr {
    height: 0; 
    color: inherit; 
  }
  h1, h2, h3 {
    font-family: 'Press Start 2P', cursive;
    color: white;
  }
  p{
    font-family: 'Montserrat', sans-serif;
  }


  abbr[title] {
    text-decoration: underline dotted;
  }


  b,
  strong {
    font-weight: bolder;
  }


  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15;
    margin: 0; 
  }


  button,
  select {
    text-transform: none;
  }


  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }


  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }


  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }


  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }


  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit; 
  }
`;

export default GlobalStyle;