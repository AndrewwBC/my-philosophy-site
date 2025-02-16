import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  color: #777;

  div {
    display: flex;
    align-items: center;
    gap: 2px;
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
