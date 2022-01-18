import React from "react";
import {
    Content,
    Main,
    Button,
    H2,
} from "../styles"

const Homepage = () => {

    return(
    <>

            
            <Main>
                (MAIN COMPONENT)
            </Main>
            <Content>
                (CONTENT COMPONENT)
                <Button><H2>Home</H2></Button>
                <Button><H2>About Me</H2></Button>
                <Button><H2>Projects/Code</H2></Button>
            </Content>

    </>
    )
};

export default Homepage;