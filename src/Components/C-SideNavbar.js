import React from "react";
import {
    Content,
    Button,
    UL,
    H3,
} from "../styles"

import { 
    Link,
  } from 'react-router-dom';

export const SideNavBar = () =>{
    
    return(
    <Content>

            <H3>Navigation</H3>
            <UL>
                <li>
                    <Link to="/">
                    <Button>Home</Button>
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                    <Button>About Me</Button>
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                    <Button>Contact Me</Button>
                    </Link>
                </li>
            </UL>

            


            {/* <Button>
                <Link to="/Proje">
                    Projects/Code
                </Link>
            </Button> */}
 
    </Content>
)

}