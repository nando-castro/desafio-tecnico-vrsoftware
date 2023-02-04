import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
  a{
    text-decoration: none;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;

export default GlobalStyle;
