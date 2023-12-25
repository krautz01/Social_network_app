import React from "react";
import s from "./post.module.css";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Post(props) {
  return (
    <div className={s.post}>
      <img />
      {props.message}
      <div>
        <span>like</span>
      </div>
      <input />
    </div>
  );
}
