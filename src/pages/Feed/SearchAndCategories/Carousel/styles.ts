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
      margin-right: 28px;
      width: max-content !important;

      div {
        display: flex;
        align-items: center;
        padding: 0px 8px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        border-radius: 0 !important;

        &:hover {
          color: #000;
          background-color: #fff;
          transition: 0.6s;
          border-bottom: 2px solid #222;
        }
      }

      p {
        font-size: 16px;
        color: #333;
        font-weight: 600;
      }
    }
  }
`;
