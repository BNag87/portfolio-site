import React from "react";
import {
    Main,
    H2,
    P,
    ImageDiv,
} from "../styles"
import Headshot from '../Images/Headshot.jpg';

export const ContactMe = () => {

    return(
    <>
        <Main>
        <H2>Contact Me</H2>
        <P CodeBlock inputPadding="10px">

        <ImageDiv src={Headshot} alt="Photo of me"/>  

            <P CodeBlock inputMargin= "15px 0px 0px 0px">
                <h2><u>Email</u></h2> 
                <h3>basilnagleva [at] hotmail [dot] co [dot] uk</h3>
            </P>

            <P CodeBlock inputMargin="15px">
                <h2><u>LinkedIn</u></h2> 
                
            </P>
            
            <P CodeBlock inputMargin="0px">
                <h2><u>Github</u></h2> 
            </P>
        </P>
        </Main>
    </>
    )
}
