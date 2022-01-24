import React from "react";
import {
    Content,
    Button,
    UL,
    H3,
    NLink,
} from "../styles"

import { 
    Link, NavLink,
  } from 'react-router-dom';

export const SideNavBar = () =>{
    
    return(
    <Content>

            <H3>Navigation</H3>

                    <NLink to="/">
                        Home
                    </NLink>

                    <NLink to="/about">
                        About Me
                    </NLink>

                    <NLink to="/contact">
                    Contact Me
                    </NLink>

            {/* <Button>
                <Link to="/Proje">
                    Projects/Code
                </Link>
            </Button> */}
 
    </Content>
)

}