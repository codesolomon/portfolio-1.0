import React from "react";
import { StyledHeader, FlexHeader } from "./header.styled";

const index = () => {
  return (
    <StyledHeader>
      <h1>CodeSolomon</h1>
      <FlexHeader>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">get in touch</a>
        </li>
      </FlexHeader>
    </StyledHeader>
  );
};

export default index;
