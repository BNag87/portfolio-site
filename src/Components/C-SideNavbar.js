import React from "react";
import {
    Content,
    H3,
    NLink,
} from "../styles"

//------------------→React Icons Imports
import { BsSignpostSplit } from 'react-icons/bs';

export const SideNavBar = () =>{
    
    return(
    <Content>

            <H3><BsSignpostSplit size={70}/></H3>

                    <NLink to="/">
                        Home
                    </NLink>

                    <NLink to="/about">
                        About Me
                    </NLink>

                    <NLink to="/projects">
                    Projects
                    </NLink>

                    <NLink to="/contact">
                    Contact Me
                    </NLink>

    </Content>
)

}