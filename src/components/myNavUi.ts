import styled from "styled-components";

export const MyNavUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
  padding-top: 12px;

  small {
    display: block;
    font-size: 16px;
  }

  a {
    text-align: end;
    font-weight: 600;
    color: #222;

    border-radius: 8px;
    padding: 8px;

    &:hover {
      color: ${({ theme }) => theme.purple.dark};
      background-color: #f9f9f9;
    }
  }
`;
