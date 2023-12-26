import React from "react";
import styled from "styled-components";

import "./App.css";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

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
    <>
      <Routes>
        <Route path="/" Component={Profile}/>
        <Route path="/dialogs" Component={Dialogs}/>
      </Routes>
      <AppWrapper>
        <Header />
        <Navbar />
        <Profile />
      </AppWrapper>
    </>
  );
}

export default App;
