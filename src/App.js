//=====================COMPONENT IMPORTS
import React from "react";
import { GlobalStyle, MainWrapper } from "./styles";
import styled from "styled-components";
import Homepage from "./Components/C-Homepage";

//=====================STYLING IMPORTS

function App() {
  return (
    <>
    <GlobalStyle />
      <MainWrapper>
        <Homepage />
      </MainWrapper>
    </>
  );
}

export default App;
