import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: auto;
  border: 1px solid yellow;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const ItemFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div``;

export const Text = styled.div`
  width: 100%;
  p {
    font-size: 34px;
    letter-spacing: -0.5px;
    line-height: 44px;
    margin-top: 42px;
    margin-bottom: 20px;
  }
`;
