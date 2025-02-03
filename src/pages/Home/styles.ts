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
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 768px;
  object-fit: cover;
  z-index: -10;
  animation: ${brightOut} 4s forwards;
`;

export const TextDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fff;

  z-index: 10;

  .title {
    font-size: 44px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #b9b9b9;
    width: max-content;

    @media (max-width: 768px) {
      font-size: 28px;
      padding-left: 8px;
    }
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
