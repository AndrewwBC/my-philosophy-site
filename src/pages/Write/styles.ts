import styled from "styled-components";

export const WriteContainer = styled.section`
  height: 100vh;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 32px;
    max-width: 100%;

    .text {
      margin-bottom: 24px;

      p {
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
`;
