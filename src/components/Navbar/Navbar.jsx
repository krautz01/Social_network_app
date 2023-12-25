import React from "react";
import s from "./navbar.module.css"


export default function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Profile</div>
      <div className={s.item}>Messages</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
      <div className={s.item}>Settings</div>
    </nav>
  );
}
