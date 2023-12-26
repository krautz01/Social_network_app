import React from "react";
import styled from "styled-components";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

export default function ProfilePage() {
  return (
    <div >
      <div className={s.ava_desc}>
        <StyledImg src="https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png" />
        Description
      </div>
      <MyPosts />
    </div>
  );
}
