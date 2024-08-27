import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  text-align: center;

  .date {
    color: #999;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .textContainer {
    display: flex;
    align-items: flex-start;
    height: max-content;

    p {
      font-size: 18px;
      letter-spacing: 0.6px;
    }
  }

  textarea {
    border: none;
    background-color: #e9e9e9;
    text-align: justify;
    padding: 24px;
    font-size: 18px;
    border-radius: 8px;
    width: 720px;
    resize: none;
    overflow: hidden;

    letter-spacing: 0.8px;
    line-height: 26px;

    transition: all 0.6s;

    @media (max-width: 768px) {
      width: 480px;
    }

    @media (max-width: 500px) {
      width: 320px;
    }
  }
`;
