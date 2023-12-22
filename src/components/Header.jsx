import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 65px;
  height: 50px;
`;

const StyledHeader = styled.header`
  grid-area: h;
  background-color: #202eae;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledImg src="https://c1.klipartz.com/pngpicture/45/420/sticker-png-digital-marketing-digital-transformation-business-technology-management-management-consulting-company-organization.png" />
    </StyledHeader>
  );
}
