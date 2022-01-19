//=====================COMPONENT IMPORTS
import React from "react";
import {
  GlobalStyle,
  MainWrapper,
  Navbar,
} from "./styles"

import { Homepage } from "./Components/C-Homepage";
import { AboutMe } from "./Components/C-AboutMe";
import { SideNavBar } from "./Components/C-SideNavbar";

//----→ react-router allows navigation between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//=====================STYLING IMPORTS

function App() {
  return (
    <Router>

    <GlobalStyle />
      
      <MainWrapper>
        <Navbar>I aM tHe NaVbAr</Navbar>
        <SideNavBar/>
        
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<AboutMe/>}></Route>
          
        </Routes>
      </MainWrapper>

    </Router>
  );
}

export default App;
