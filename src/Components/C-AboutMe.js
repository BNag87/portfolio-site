import React from "react";
import {
    Main,
    H2,
    P,
} from "../styles"
import SteamStatsIMG from '../Images/SteamStats.PNG';

export const AboutMe = () => {

    return(
    <>
        <Main>
        (MAIN COMPONENT)
        <H2>About Me</H2>
        
    <P>
        I've been interested in coding for a long time and am mainly self-taught.
        <br/>I studied A2 Computing in college back in 2005 and have been coding in different languages along the way.
    </P>
    <P>
        These languages include:
    <P CodeBlock>
        <br/>HTML, CSS, XML
        <br/>Python
        <br/>Java, Javascript, Actionscript
        <br/>C++, C#
        <br/>Visual Basic
        <br/>Assembly Language
    </P>
    </P>

    <P>
        I've written code for several purposes, mainly to keep up to date and refresh my knowledge over the years.
    </P>
    <P>
        I have also made several mods for different video games.
        <br/>The most recent one I did was a weapons pack for Rimworld as I wanted to challenge myself to see if I could do it.
        <br/>The mod itself was published on the <a href = "https://steamcommunity.com/sharedfiles/filedetails/?id=2020640738" target="_blank" rel="noreferrer">Steam workshop</a> so that people could use it themselves in their games. 
        <br/>It has entirely positive reviews and over one thousand downloads
    </P>


    <P CodeBlock inputPadding = "10px">
        <img src={SteamStatsIMG} alt="Screenshot of steam mod statistics"/>   
    </P>
    
            </Main>
    </>
    )
};