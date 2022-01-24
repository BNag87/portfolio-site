//=====================COMPONENT IMPORTS
import React from "react";
import {
  GlobalStyle,
  MainWrapper,
  PairWrapper,
} from "./styles"

import { Homepage } from "./Components/C-Homepage";
import { AboutMe } from "./Components/C-AboutMe";
import { SideNavBar } from "./Components/C-SideNavbar";
import { TopNavbar } from "./Components/C-Navbar";
import { ContactMe } from "./Components/C-ContactMe";

//----→ react-router allows navigation between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//=====================STYLING IMPORTS
function App() {
  return (
    <Router>
      <GlobalStyle />
      <TopNavbar/>
      <MainWrapper>
        <PairWrapper>
          <SideNavBar/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/about" element={<AboutMe/>}></Route>
            <Route path="/contact" element={<ContactMe/>}></Route>
          </Routes>
        </PairWrapper>
      </MainWrapper>
    </Router>
  );
}

export default App;
