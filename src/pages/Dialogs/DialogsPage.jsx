import React from "react";
import s from "./dialogsPage.module.css";

export default function DialogsPage() {
  return (
    <>
      <div className={s.dialog}>
        <div className={s.dialog_img}>
          <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" />
          <span>Name</span>
        </div>
        <div className={s.dialog_text}>
          <span>I want to sleep</span>
        </div>
      </div>


      <div className={s.dialog}>
        <div className={s.dialog_img}>
          <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" />
          <span>Name</span>
        </div>
        <div className={s.dialog_text}>
          <span>I want to sleep</span>
        </div>
      </div>


      <div className={s.dialog}>
        <div className={s.dialog_img}>
          <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" />
          <span>Name</span>
        </div>
        <div className={s.dialog_text}>
          <span>I want to sleep</span>
        </div>
      </div>
    </>
  );
}
