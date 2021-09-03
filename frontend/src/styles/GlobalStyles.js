import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background: #eee;
      color: #0a100d;
    }
  }
`;
