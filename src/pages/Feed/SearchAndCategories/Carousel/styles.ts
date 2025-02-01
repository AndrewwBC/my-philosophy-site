import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1/-1;
  grid-row: 2;

  .carouselContainer {
    display: flex;
    justify-content: start;
    margin-top: 24px;

    .carouselItem {
      display: flex;
      align-items: center;
      max-width: 140px;
      min-width: 140px;

      div {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: start;
        justify-self: start;
      }

      p {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: #000;
        }
      }
    }
  }
`;
