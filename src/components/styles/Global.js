import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    font-size: ${({ theme }) => theme.fontSize.p};
    font-weight: ${({ theme }) => theme.fontWeight.small};
    font-family: ${({ theme }) => theme.fontFamily.epilogue};
    background-color: ${({ theme }) => theme.color.almostWhite};
    #root{
      max-width: 100%;
      width: 100%
    }
}

img{
    width: 100%
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

`;

export default GlobalStyles;
