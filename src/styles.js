import styled, { css, createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as palette from './styleVars';

// ==================================→TEXT STYLING
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
        background: ${props => props.inputBackground || "rgb(230,255,230)"};
        padding: ${props => props.inputPadding || "10px 0px 10px 0px"};
        margin: ${props => props.inputMargin || "0px"};
        color: black;
        border: ${props => props.inputBorder || "outset rgba(0,0,0, 0.1) 2px"};
        border-radius: 5px;
        font-family:  ${props => props.inputFontFamily || "Courier"};
        font-size: ${palette.var_FontSizeSmall};
        font-weight: 700;
        width: ${props => props.inputWidth || "300px"};
    `}

    ${props => props.FancyBlock && css`
        display: flex;
        flex-direction: column;
        background: ${props => props.inputBackground || "rgb(230,255,230)"};
        padding: ${props => props.inputPadding || "10px 0px 10px 0px"};
        margin: ${props => props.inputMargin || "10px"};
        color: black;
        border: outset rgba(0,0,0, 0.1) 2px;
        border-radius: 5px;
        font-family:  ${props => props.inputFontFamily || "calibri"};
        font-size: ${palette.var_FontSizeMedium};
        font-weight: 500;
        width:  ${props => props.inputWidth || "70%"};
    `}
`;

//div for <a> tags
export const ATag = styled.a`
    //rules related to <a> tags
    text-decoration: none;

    background: ${props => props.inputBackground || "rgb(230,255,230)"};
    padding: ${props => props.inputPadding || "10px 0px 10px 0px"};
    margin: ${props => props.inputMargin || "0px"};
    color: black;
    border: outset rgba(0,0,0, 0.1) 2px;
    border-radius: 5px;
    font-family:  ${props => props.inputFontFamily || "Courier"};
    font-size: ${palette.var_FontSizeSmall};
    font-weight: 700;
    width: 300px;

    &:hover {
        background: rgb(233,255,255);
        color: rgb(130, 130, 130);
        transition: all 0.5s ease-in-out;
    }
`;


export default styled(NavLink)`
  color: black;
  background: red;
  width: 100%;
  
`;

export const NLink = styled(Link)`
    
    color: black;
    background: rgb(253,250,230);

    border: outset 2px rgba(20,20,190,0.2);
    border-radius: 10px;

    text-decoration: none;
    text-align: center;
    
    padding: 10px;
    margin: 5px;
    
    font-size: 23px;
    font-family: Impact;
    font-weight: lighter;

    width: 110px;

    &:hover {
      color: rgb(130,130,130);
      background: rgb(233,255,255);
      transition: all 0.5s ease-in-out;
    }
  `;

//div to contain text without paragraph tag newlines
export const TitleHeader = styled.div`

        align-items: center;
        justify-content: space-between;
        font-family: 'Impact';
        font-size: 38px;
        font-weight: lighter;
        background: none;
        padding: 10px;
        margin: ${props => props.inputMargin || "0"};
        border: none;
        width:auto;
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

// ==================================→'GLOBAL' STYLING
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

// ==================================→DIV STYLING

//'Divider' is an empty div meant for breaking apart elements
export const Divider = styled.div`
  body {
    flex-direction: row;
    background: red;
    
    margin: 0;
    padding: 0;
    width:100%;
    
  }
`;

//'PairWrapper' is a wrapper meant to contain the main area and sidebar
export const PairWrapper = styled.div`
    display: flex;
    flex-direction: row;
        
    margin: 0;
    padding: 0;
    width:100%;
`;

//'ImageDiv' image wrapper
export const ImageDiv = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
`;

//'MainWrapper' is a div that contains rendered elements. Use it for separate components
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    width: 100%;
    height: 100vh;

    background: ${palette.var_SecondaryColour};
    font-size: ${palette.var_FontSizeMedium};
    border: solid rgba(200, 230, 230, 0.5);

    transition: all 0.25s ease-in-out;
`;

//'MainWrapper' is a div that contains rendered elements. Use it for separate components
export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    
    background: ${palette.var_TertiaryColour};
    position: fixed; 
    top: 0;
    width:100%;
    
    justify-content: space-between;
`;

//Styling for a main div (where content gets rendered through react routers)
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;

    height: 100%;
    width: 100%;
    background: ${palette.var_SecondaryColour};  
    
    margin-left: 186.6px;
    margin-top: 50px;
`;

//styling for an unordered list
export const UL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;   
    height: 100%;
    overflow: auto;
`
//Side navbar css rules
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-style: none solid none none;
    border-color: rgba(200, 230, 230, 0.5);
    
    width: 184.6px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 66px;

    background: ${palette.var_NavGradient};  
    
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
    padding: 10px;
    
    &:hover {
        background: rgb(233,255,255);
        transition: all 0.3s ease-in-out;
    }
`;

//Styles to force a react router link in to a proper format
export const RouterLinkStyle = styled.link`
    text-decoration: "none";
    text-align: center;
    color: inherit;  
    font-family: impact;
    font-weight: lighter;
    font-variant: small-caps; 
  `;
