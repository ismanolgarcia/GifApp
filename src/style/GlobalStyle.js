import { createGlobalStyle } from 'styled-components';
import { color } from './Variables';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Helvetica, Arial, sans-serif;
}

body {
  background-color: ${color.bgColor};
  padding: 0 10%;
}

`;

export default GlobalStyle;
