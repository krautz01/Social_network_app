import React from "react";
import { Link } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={s.nav}>
        <Link to="/profile" className={s.item}>
          Profile
        </Link>
        <Link to="/dialogs" className={s.item}>
          Dialogs
        </Link>
        <Link to="/news" className={s.item}>
          News
        </Link>
        <Link to="/music" className={s.item}>
          Music
        </Link>
        <Link to="/settings" className={s.item}>
          Settings
        </Link>
      </nav>
    </>
  );
}
