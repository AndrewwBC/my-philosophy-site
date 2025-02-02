import styled from "styled-components";

export const WriteContainer = styled.section`
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 32px;

    .text {
      margin-bottom: 24px;

      p {
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
`;
