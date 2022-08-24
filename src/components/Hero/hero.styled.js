import styled from "styled-components";

export const StyledContent = styled.div`
  width: 100%;
  height: auto;
  /* border: 1px solid red; */

  h1 {
    margin: 0;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: -1.6px;

    span {
      color: brown;
    }
  }
`;

export const ExploreButton = styled.div`
  margin-top: 1.5rem;

  a {
    border: 0px;
    font-size: 23px;
    font-weight: 500;
    color: #000;
    opacity: 0.4;
    transition: opacity 0.4s ease-out;
    letter-spacing: -0.1px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding-bottom: 2px;
    cursor: pointer;
  }
`;
