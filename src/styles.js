import styled, { css, createGlobalStyle } from "styled-components";
import * as palette from './styleVars';



//Global style mean to style the body of the entire app
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.var_MainColour};
    color: ${palette.var_FontColour};

    
    margin: 0;
    padding: 0;
  }
`;

//Use of CSS grid in a parent div wrapper
export const MainWrapper = styled.div`
display: grid;
grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar main main main"
    "footer footer footer footer";
    text-align: center;
    grid-gap: 0.25rem;

    width: 100vw;
    height: 100vh;

    background: ${palette.var_MainColour};
    font-size: ${palette.var_FontSizeMedium};
    border: solid rgba(200, 230, 230, 0.5);
`;

export const Navbar = styled.div`
    grid-area: nav;
    background: ${palette.var_SecondaryColour};
    border: solid rgba(200, 230, 230, 0.5);
`;

export const Footer = styled.div`
    grid-area: footer;
    background: ${palette.var_SecondaryColour};
    border: solid rgba(200, 230, 230, 0.5);
`;

export const Main = styled.div`
    grid-area: main;
    background: ${palette.var_TertiaryColour};
    border: solid rgba(200, 230, 230, 0.5);
`;

export const Content = styled.div`
    grid-area: sidebar;
    background: ${palette.var_TertiaryColour};
    border: solid rgba(200, 230, 230, 0.5);
`;

export const Fluff = styled.div`
grid-area: main;
color: ${palette.var_SecondaryColour};
background: ${palette.var_TertiaryColour};
border: solid rgba(200, 230, 230, 0.5);
`;