import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  grid-area: c;
  background-color: #202eae;
  border-radius: 20px;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Contetnt() {
  return (
    <StyledContent>
      <div>
        <StyledImg src="https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png" />
        Description
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
    </StyledContent>
  );
}
