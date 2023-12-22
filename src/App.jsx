import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contetnt from "./components/Contetnt";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
  "h h h"
  "n c c";
  grid-tempalte-rows: 60px 1fr;
  grid-tempalte-columns: 2fr 10fr;
  grid-gap: 10px;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Navbar />
      <Contetnt />
    </AppWrapper>
  );
}

export default App;
