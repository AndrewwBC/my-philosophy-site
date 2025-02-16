import styled from "styled-components";

export const OutletContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};

  .content {
    max-width: 1200px;
    height: 100%;

    margin: 0 auto;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
