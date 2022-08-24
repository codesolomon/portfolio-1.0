import styled from "styled-components";

export const StyledHeader = styled.nav`
  width: 100%;
  height: auto;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
`;

export const FlexHeader = styled.ul`
  display: flex;
  gap: 3rem;
  list-style-type: none;

  li {
    font-size: 18px;
    color: #505050;
    line-height: 2.4;
    letter-spacing: -0.2px;
    font-weight: 600;
  }
`;
