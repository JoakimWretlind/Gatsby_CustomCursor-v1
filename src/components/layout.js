import React from "react";
import { createGlobalStyle } from "styled-components";


import CustomCursor from "../components/customCursor"

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    cursor: none;
  }
  
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  
  body {
       font-size: 16px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background: #333;
  overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;

const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <CustomCursor />
        </>
    )
}
export default Layout;