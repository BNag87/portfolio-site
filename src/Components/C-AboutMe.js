import React from "react";


import {
    Main,
    H2,
    P,
} from "../styles"

export const AboutMe = () => {

    return(
    <>
        <Main>

        <H2>About Me</H2>

        <P FancyBlock inputPadding="20px" inputWidth="95%">
            I've always been interested in technology. By the time I was in college, I became the tech support for my family.<br/>
            Helping people with technical issues was rewarding and pushed me to develop an interest in coding.<br/>
            I like being certain of what I'm practicing, so I explore multiple possibilities to find the most effective solution for the task.<br/>
        </P>

        <P FancyBlock inputPadding="20px" inputWidth="95%">
            I have practical experience working in front-end development, using React and a variety of libraries.<br/>I also have completed two coding bootcamps with Codenation where I learned how to build web applications and work as part of a team.<P/>
            My most recent projects can be viewed in the Projects page. 
        </P>

        <P FancyBlock inputPadding="20px" inputWidth="95%">
            In my free time, if I'm not playing video games, then I am modding them. <br/>Doing this has always been enjoyable for me and it allows me to challenge myself to work with unfamiliar technology.<P/>
            Currently, I am working on a custom texture pack for Minecraft at the request of my children. 
        </P>

        <P FancyBlock inputPadding="20px" inputWidth="95%">
            Outside of the home, I like going to charity events with my family, going for walks in huge parks or just enjoying myself at the local pub.
        </P>

        </Main>
    </>
    )
};