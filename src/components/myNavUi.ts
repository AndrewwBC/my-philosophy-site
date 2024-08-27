import styled from "styled-components";

export const MyNavUI = styled.div`
  div {
    border-top: 1px solid #c9c9c9;
    margin-top: 4px;
    padding-top: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      display: block;
      font-size: 16px;
    }

    a {
      text-align: end;
      font-weight: 600;
      color: #222;
      background-color: #f1f1f1;
      border-radius: 8px;
      padding: 8px;

      &:hover {
        color: ${({ theme }) => theme.purple.dark};
        background-color: #f9f9f9;
      }
    }
  }
`;
