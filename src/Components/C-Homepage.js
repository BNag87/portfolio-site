import React from "react";
import {
    Main,
    H2,
    H3,
    P,
} from "../styles"

export const Homepage = () => {

    return(
    <>
        <Main>
            <H2>Welcome!</H2>
            <P FancyBlock>
                I'm Basil and I am seeking a role as an Junior Web Developer.<br/><br/>
                You can view projects I've worked on in the Projects page, where you can also find links to the repositories of each project.<br/><br/>
                If you have a role I would be suited for or would like to learn more, please get in touch on the Contact page.<br/>
            </P>
            
            <H3>Thanks for visiting!</H3>
            </Main>
    </>
    )
};