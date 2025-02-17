import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 60px;

  & > div:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    padding: 0px 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;

    & > div:first-child {
      border: none;
    }
  }
`;
