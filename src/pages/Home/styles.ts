import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 100%;
`;

const brightOut = keyframes`
from {
  filter: contrast(120%) brightness(80%) saturate(150%);

} to {
  filter: contrast(135%) brightness(30%) saturate(160%);

}
`;

export const AthensImg = styled.img`
  position: absolute;
  object-fit: contain;
  z-index: -10;
  animation: ${brightOut} 4s forwards;
`;

export const TextDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: start;
  color: #fff;
  flex-direction: column;

  z-index: 10;

  .title {
    font-size: 44px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #b9b9b9;
  }

  button {
    background-color: rgb(150, 82, 206);
    padding: 12px 40px;
    border: none;
    cursor: pointer;
    border-radius: 18px;
    color: #f9f9f9;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      background-color: rgb(146, 57, 184);
    }
  }
`;
