import styled, { keyframes } from "styled-components";

const animaIn = keyframes`
  from {
    top: -12px;
  } to {
    top: -40px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  position: relative;

  &:hover {
    .card {
      z-index: 100;
    }

    .cardHeader {
      z-index: 100 !important;
      animation: ${animaIn} 0.6s forwards ease-in;
    }
  }
`;

export const Card = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 160px;
  z-index: 100;

  @media (max-width: 500px) {
    grid-template-columns: 3fr 1fr;
  }

  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  padding-left: 12px;
  height: 100%;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 1px 1px 4px #bdbdbd, -5px -5px 10px #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    background: #ffffff;
  }

  .textContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 8px;
  }

  .preview {
    p {
      color: #555;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .postImage {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
      max-height: 100%;
      min-height: 100%;
      border-radius: 4px;
    }
  }
`;

export const ProfileAndCreationDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 8px 0px;
  padding-right: 24px;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  padding: 8px 4px;
  padding-bottom: 18px;
  position: absolute;

  div {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 14px;
    color: #777;
  }

  background-color: #f9f9f9;

  width: 50%;
  height: max-content;
  top: -12px;
  left: 8px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;
