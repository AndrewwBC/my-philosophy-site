import styled from "styled-components";

export const MyInput = styled.input`
  padding: 6px 18px 4px 6px;
  background-color: ${({ theme }) => theme.neutral.c3};
  border: 2px solid transparent;
  border-radius: 2px;
  transition: 0.2s;
  text-align: left;
  cursor: auto;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.neutral.c6};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.purple.light};
    background-color: ${({ theme }) => theme.neutral.c1};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.purple.medium};
  }
`;
