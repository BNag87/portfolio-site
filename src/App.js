//=====================SYLING IMPORTS
import {
  GlobalStyle,
  MainWrapper,
  PairWrapper,
} from "./styles"

//=====================COMPONENT IMPORTS (from 'Components' folder)
import { Homepage } from "./Components/C-Homepage";
import { AboutMe } from "./Components/C-AboutMe";
import { SideNavBar } from "./Components/C-SideNavbar";
import { TopNavbar } from "./Components/C-Navbar";
import { ContactMe } from "./Components/C-ContactMe";
import { Projects } from "./Components/C-Projects";


import React from "react";  //allows components to be rendered
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //allows page/component navigation with Routes

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
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contact" element={<ContactMe/>}></Route>
          </Routes>
        </PairWrapper>
      </MainWrapper>
    </Router>
  );
}

export default App;
