import styled from "styled-components";

export const Content = styled.div`
  span {
    background-color: ${({ theme }) => theme.green.medium};
    border-radius: 4px;
    padding: 2px 4px;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.green.light};
      transition: 0.3s;
    }
  }
`;
