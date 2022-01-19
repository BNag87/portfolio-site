import styled, { css, createGlobalStyle } from "styled-components";
import * as palette from './styleVars';

//styling for p tags. should be clearly visible but not obstructive
export const P = styled.p`

    align-items: center;
    text-align: center;
    color: ${palette.var_FontColour};  
    font-size: ${palette.var_FontSizeMedium};
    font-weight: 500;
    padding: 0px;
    margin: 10px;

    ${props => props.CodeBlock && css`
    display: flex;
    flex-direction: column;
        background: ${palette.var_MainColour};
        padding: ${props => props.inputPadding || "10px 0px 10px 0px"};
        color: black;
        border: outset rgba(0,0,0, 0.1) 2px;
        border-radius: 5px;
        font-family: 'Courier New';
        font-size: ${palette.var_FontSizeSmall};
        font-weight: 700;
        width: 300px;
    `}
`;

export const H2 = styled.h2`
    
    text-align: center;
    color: ${palette.var_FontColour};  
    font-family: impact;
    font-weight: lighter;
    font-variant: small-caps;

`;

export const H3 = styled.h3`
    
    text-align: center;
    color: ${palette.var_FontColour};  
    font-variant: small-caps;
    
`;

//IMPORTANT! Global style mean to style the body of the entire app
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.var_MainColour};
    color: ${palette.var_FontColour};
    margin: 0;
    padding: 0;
    font-family: calibri;
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
    "sidebar main main main";
    text-align: center;
    
    width: 100vw;
    height: 100vh;

    background: ${palette.var_SecondaryColour};
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
    background: ${palette.var_TertiaryColour};
    border-bottom: solid rgba(200, 230, 230, 0.5);
`;

export const Footer = styled.div`
    grid-area: footer;
    background: ${palette.var_TertiaryColour};
    border-top: solid rgba(200, 230, 230, 0.5);
`;

export const Main = styled.div`
    grid-area: main;
    justify-content: center;  
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.25rem;
    padding: 0.25rem;

    background: ${palette.var_SecondaryColour};  

@media (max-width: 550px)
  {
  flex-direction: column;

  }
`;

export const Content = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none solid none none;
    border-color: rgba(200, 230, 230, 0.5);
    border-radius: 0px 10px 10px 0px;
    width: 184.6px;

   
    gap: 0.25rem;
    padding: 0.25rem;
    background: ${palette.var_MainColour};  
    
    @media (max-width: 550px)
    {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    
    text-align: center;
    background: ${palette.var_SecondaryColour};  
    width: 150px;
    border-radius: 5px;
    margin: 10px 0px 10px 0px;
    
    &:hover {
        background: rgb(233,255,255);
        transition: all 0.3s ease-in-out;
    }
`;

//Styles to force a react router link in to a proper format


export const RouterLinkStyle = styled.a`
    text-decoration: "none";
    text-align: center;
    color: inherit;  
    font-family: impact;
    font-weight: lighter;
    font-variant: small-caps; 
  `;

export const Fluff = styled.div`
grid-area: main;
color: ${palette.var_SecondaryColour};
background: ${palette.var_TertiaryColour};
border: solid rgba(200, 230, 230, 0.5);
`;