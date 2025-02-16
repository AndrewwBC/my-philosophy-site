import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
  }

  .ico {
    color: ${({ theme }) => theme.paper.dark};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    .ico {
      height: 16px;
      width: 16px;
    }
  }
`;
