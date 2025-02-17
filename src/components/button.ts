import styled from "styled-components";

export const MyButton = styled.button`
  background-color: ${({ theme }) => theme.purple.medium};
  padding: 8px 32px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  width: 100%;

  &:disabled {
    background-color: #999;
  }

  &:hover {
    background-color: ${({ theme }) => theme.purple.dark};
  }
`;
