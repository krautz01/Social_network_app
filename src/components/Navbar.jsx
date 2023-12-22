import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav `{
    gridarea: n;
}`

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>Profile</div>
      <div>Messages</div>
    </StyledNavbar>
  );
}
