//------------------→Library Imports
import React from "react";

//------------------→Styling Imports
import {
    Main,
    H2,
    H3,
    P,
} from "../styles"




//------------------→Component Structure
export const Projects = () => {
    return(
        <>
            <Main>
                <H2>Current/Completed Projects</H2>

                <P>
                    Here are several projects I've worked on in the past.<br/>
                    Some are projects I worked on as part of a team, and others were my own work.<br/>
                    All projects can be viewed on my <a href="https://www.linkedin.com/in/basil-nagle-523b412b/" target="_blank" rel="noreferrer">Github</a> profile.
                </P>
{/* First Project - Alebas*/}
                <P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://github.com/BNag87/alebas-frontend" target="_blank" rel="noreferrer">
                            Alebas Project
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a project I am working on with a friend.<br/>
                        It aims to be a system manager for dealing with tabletop gaming rulesets.<br/>
                        Currently, it works with elements of the DnD 5e ruleset.<br/>
                        The first planned feature is to allow a user to generate a player character.<br/>
                    </P>
                </P>
{/* Second Project - GotMilk?*/}
                <P CodeBlock inputPadding="10px" inputMargin="10px" inputBackground="rgb(210,235,210)">
                    <H3>
                        <a href="https://github.com/BNag87/gotMilkGame" target="_blank" rel="noreferrer">
                            "Got Milk?" Project
                        </a>
                    </H3>

                    <P CodeBlock>
                        This is a project I worked on as part of a team of five.<br/>
                        It's a text-adventure game, written in Python.<br/>
                        It features a combat system and branching choices as well as victory/loss conditions.<br/>
                        Here, we learned how every developer wants to add more features, but don't have the time to.<br/>
                    </P>
                </P>

            </Main>
        </>
    )
}