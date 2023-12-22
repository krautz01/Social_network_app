import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  grid-area: n;
  background-color: #202eae;
  border-radius: 20px;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </StyledNavbar>
  );
}
