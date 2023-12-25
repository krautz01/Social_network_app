import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
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
      <Profile />
    </AppWrapper>
  );
}

export default App;
