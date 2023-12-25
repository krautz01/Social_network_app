import React from "react";
import styled from "styled-components";
import s from "./header.module.css"

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export default function Header() {
  return (
    <header className={s.header}>
      <StyledImg src="https://c1.klipartz.com/pngpicture/45/420/sticker-png-digital-marketing-digital-transformation-business-technology-management-management-consulting-company-organization.png" />
    </header>
  );
}
