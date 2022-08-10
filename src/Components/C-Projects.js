//------------------→Library Imports
import React from "react";

//------------------→Styling Imports
import {
    Main,
    H2,
    H3,
    P,
    PairWrapper,
} from "../styles"

import Roll20IMG from '../Images/GifShot.PNG';


//------------------→Component Structure
export const Projects = () => {
    return(
        <>
        <Main>
            
        <H2>Current/Completed Projects</H2>

    <P>
        I've been interested in coding for a long time and am mainly self-taught.
        <br/>I studied A2 Computing in college back in 2005 and have been coding in different languages along the way.
    </P>
    <P>
        My current skillset includes:
        <P CodeBlock inputPadding="10px" inputMargin="10px">
            <br/>HTML, CSS, Javascript
            <br/>React, Node, npm, styled-components
            <br/>Git, Github, Gitkraken
        </P>
    </P>

                <P>
                    Here are projects, past and present, that I've worked on.<br/>
                    Some are projects I worked on as part of a team, and others were my own work.<br/>
                    All projects can be viewed on my <a href="https://www.linkedin.com/in/basil-nagle-523b412b/" target="_blank" rel="noreferrer">Github</a> profile.
                </P>
                  
                
                <PairWrapper inputFlexDirection="row">

{/* First Project - DMS SAK*/}
<P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://github.com/BNag87/Testing-Area" target="_blank" rel="noreferrer">
                            DMs S.A.K
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a persistent project I can continually add to.<br/><br/>
                        It's a collection of tools and references that make running a game of DnD easier.<br/><br/>
                        Several components exist with more planned for the future.<br/><br/>
                        It uses React, MUI components, JSON data and styled-components.<br/><br/>
                        <a href="https://dmsak.netlify.app" target="_blank" rel="noreferrer">
                            [Deployed app]
                        </a>
                    </P>
                </P>


{/* Second Project - Mass Effect Guns for Rimworld*/}
                <P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2020640738" target="_blank" rel="noreferrer">
                            Mass Effect Guns Mod
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a mod for the game Rimworld.<br/><br/>
                        It adds firearms from the Mass Effect universe to the game.<br/><br/>
                        The mod itself is published on the Steam workshop.<br/><br/>
                        It has entirely positive reviews and over one thousand downloads to date.<br/><br/>
                        I used Photoshop, Audacity and XML definitions to give the weapons their attributes in game.<br/>
                    </P>
                </P>

{/* Third Project - This site!*/}
<P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://github.com/BNag87/portfolio-site" target="_blank" rel="noreferrer">
                            This Website!
                        </a>
                    </H3>

                    <P CodeBlock>
                        A portfolio website meant to showcase my aptitude for web development.<br/><br/>
                        Built with React, MUI and styled-components.<br/><br/>
                        Designed to be minimalist and only use four colours throughout.<br/><br/>
                        Light blues are used to instill a sense of trustworthiness.<br/><br/>
                        Links are also provided to my Github, email and LinkedIn.<br/><br/>
                    </P>
                </P>                

{/* Fourth project - DnD Character Sheet*/}
<P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                    <a href="https://github.com/BNag87/FusionCharSheet" target="_blank" rel="noreferrer">
                            Fusion Character Sheet
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a character sheet for use in a tabletop game online.<br/><br/>
                        It's made with HTML and CSS as it uses built in functions of <a href={Roll20IMG} target="_blank" rel="noreferrer">Roll20.</a><br/><br/>
                        Players can enter their characters attributes and make dice rolls based off of them.<br/><br/>
                        They can also resolve attacks with dice rolls that rely on the attributes their character has.<br/><br/>
                    </P>
                </P>

{/* Fifth Project - GotMilk?*/}
                <P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://github.com/BNag87/gotMilkGame" target="_blank" rel="noreferrer">
                            "Got Milk?" Project
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a project I worked on as part of a team of four.<br/><br/>
                        It's a text-adventure game, written in Python.<br/><br/>
                        It features a combat system and branching choices as well as victory/loss conditions.<br/><br/>
                        Here, we learned how every developer wants to add more features, but usually won't have the time to.<br/><br/>
                    </P>
                </P>

                </PairWrapper>
                </Main> 
        </>
    )
}