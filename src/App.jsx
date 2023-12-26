import React from "react";
import styled from "styled-components";
import { Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./pages/Profile/ProfilePage";
import DialogsPage from "./pages/Dialogs/DialogsPage";
import NewsPage from "./pages/News/NewsPage";
import MusicPage from "./pages/Music/MusicPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
  console.log(Outlet);
  return (
    <>
      <AppWrapper>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dialogs" element={<DialogsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/*" element={<NotFoundPage />} />

            {/* именно routing в этом месте отображает именно 
            ту страницу, путь которой стоит в URL */}
          </Routes>
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
