import React from "react";
import {
    Content,
    Button,
} from "../styles"

import { 
    Link,
  } from 'react-router-dom';

export const SideNavBar = () =>{
    
    return(
    <Content>

            (CONTENT COMPONENT)
            
                <Link to="/">
                <Button>Home</Button>
                </Link>
            
                <Link to="/about">
                <Button>About Me</Button>
                </Link>

            {/* <Button>
                <Link to="/Proje">
                    Projects/Code
                </Link>
            </Button> */}
 
    </Content>
)

}