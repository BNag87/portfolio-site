import styled, { css, createGlobalStyle } from "styled-components";
import * as palette from './styleVars';



//IMPORTANT! Global style mean to style the body of the entire app
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
    
    width: 100vw;
    height: 100vh;

    background: ${palette.var_MainColour};
    font-size: ${palette.var_FontSizeMedium};
    border: solid rgba(200, 230, 230, 0.5);

    grid-gap: 0.25rem;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
    }
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
     display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  background: ${palette.var_TertiaryColour};  
  grid-area: main;
  justify-content: center;
  @media (max-width: 550px)
  {
  flex-direction: column;

  }
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