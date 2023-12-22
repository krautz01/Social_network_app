import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contetnt from "./components/Contetnt";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 1440px;
  height: 1024px;
  display: grid;
  grid-template-areas:
    "h h "
    "n c ";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
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
