import React from "react";
import s from "./navbar.module.css"
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className={s.nav}>
      <Link to="/" className={s.item}>Profile</Link>
      <Link to="/dialogs" className={s.item}>Messages</Link>
      <Link to="/news" className={s.item}>News</Link>
      <Link to="/music" className={s.item}>Music</Link>
      <Link to="/settings" className={s.item}>Settings</Link>
    </nav>
  );
}
