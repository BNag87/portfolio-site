//=====================COMPONENT IMPORTS
import React from "react";
import {
  GlobalStyle,
  MainWrapper,
  Content,
  Navbar,
  Main,
  Footer,
} from "./styles"
import Homepage from "./Components/C-Homepage";
import { SideNavBar } from "./Components/C-SideNavbar";

//=====================STYLING IMPORTS

function App() {
  return (
    <>
    <GlobalStyle />
      <MainWrapper>
        <SideNavBar />
        <Navbar>I aM tHe NaVbAr</Navbar>
        <Homepage />
      <Footer>I aM tHe FoOtEr</Footer>
      </MainWrapper>
    </>
  );
}

export default App;
