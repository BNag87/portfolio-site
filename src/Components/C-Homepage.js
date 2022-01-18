import React from "react";
import {
    MainWrapper,
    Content,
    Navbar,
    Main,
    Footer,
} from "../styles"

const Homepage = () => {

    return(
    <>
        <MainWrapper>
            <Navbar>I am the Navbar</Navbar>
            <Main>I am the main content</Main>
            <Content>I am a content box</Content>
            <Footer>I am the footer</Footer>
        </MainWrapper>
    </>
    )
};

export default Homepage;