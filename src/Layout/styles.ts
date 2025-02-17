import styled from "styled-components";

export const OutletContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  .content {
    max-width: 1200px;
    margin: 0 auto;

    height: 100%;

    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
