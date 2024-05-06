import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .date {
    color: #999;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .textContainer {
    p {
      font-size: 18px;
      letter-spacing: 0.6px;
    }
  }
`;
