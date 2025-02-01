import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  & > div:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
