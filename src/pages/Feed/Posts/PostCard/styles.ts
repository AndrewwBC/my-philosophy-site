import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;

  &:hover {
    .card {
      z-index: 100;
    }

    .cardHeader {
      top: -40px;
      transition: 0.6s ease-in;

      @media (max-width: 768px) {
        top: -32px;
      }
    }
  }

  &:not(&:hover) {
    opacity: 0.9;
    transition: all 0.6s;
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
  box-shadow: 2px 2px 6px #bdbdbd;
  cursor: pointer;

  &:hover {
    background: #ffffff;
  }

  .textContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 8px;

    .title {
      margin-top: 4px;
    }
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
      object-fit: cover;
      width: 100%;
      max-height: 100%;
      min-height: 100%;
      border-radius: 4px;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  padding: 8px;
  padding-bottom: 18px;
  position: absolute;

  background-color: #fff;

  width: max-content;
  height: max-content;
  top: -12px;
  left: 8px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 2px 2px #e9e9e9;
`;
