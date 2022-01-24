import React from "react";
import {
    Main,
    H2,
    P,
    ImageDiv,
    ATag,
} from "../styles"

import { FaLinkedin, FaGithubSquare, FaAt } from 'react-icons/fa';

import Headshot from '../Images/Headshot.jpg';

export const ContactMe = () => {

    return(
    <>
        <Main>
        <H2>Contact Me</H2>
        <P CodeBlock inputPadding="10px" inputBackground="rgb(210,235,210)">

        <ImageDiv src={Headshot} alt="Photo of me"/>  

        <ATag href="mailto:basilnagleva[at]hotmail[dot]co[dot]uk" inputMargin="10px">
                <h2><FaAt/> <u>Email</u></h2> 
        </ATag>


            <ATag href="https://www.linkedin.com/in/basil-nagle-523b412b/" target="_blank" rel="noreferrer" inputMargin="0px 0px 0px 0px">
                <h2><FaLinkedin/> <u>LinkedIn</u></h2> 
            </ATag>

        <ATag href="https://github.com/BNag87" target="_blank" rel="noreferrer" inputMargin="10px 0px 0px 0px">
            <h2><FaGithubSquare/> <u>Github</u></h2> 
        </ATag>
        </P>

        </Main>
    </>
    )
}
