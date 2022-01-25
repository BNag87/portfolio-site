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
            <P FancyBlock>I'm Basil and I am seeking work as an "Apprentice/Junior Front End Developer".</P>
            <P FancyBlock>I've always been interested in writing code and am putting all of my effort in to making it a career.</P>
            <P FancyBlock>I have completed a course with Codenation, titled <i>Level 2 Certificate in IT User Skills</i> which taught me how to use Python, HTML and CSS.
            <br/>After this, I then took and completed a coding mastery course. Over three months, I learned how to use React to build apps and enjoy this a great deal more.
            <br/>I have taught myself several languages over the years and don't want it to just be a hobby.</P>
            <P FancyBlock>I prefer front-end work, though I am open to full stack or back-end as well.</P>
            <P FancyBlock>On the 'About Me' page, there are some examples of earlier projects I've done, with screenshots.<br/>
            <br/>On the 'Projects' page, there are links to repositories I've made in my own time.</P>
            <P FancyBlock>If you'd like to speak to me about employment, then head to the 'Contact Me' page.</P>

            <H3>Thanks for visiting!</H3>
            </Main>
    </>
    )
};