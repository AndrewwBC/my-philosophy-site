import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 24px;
  }

  button {
    background-color: #c175ff;
    padding: 12px 32px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 12px;

    &:disabled {
      background-color: #999;
    }
  }

  form {
    display: flex;
    gap: 12px;
    flex-direction: column;
    min-width: 260px;
    margin-top: 12px;
  }
`;

export const Input = styled.input`
  padding: 4px 18px 4px 6px;
  background-color: ${({ theme }) => theme.neutral.c3};
  border: 2px solid transparent;
  border-radius: 2px;
  transition: 0.2s;
  text-align: left;
  cursor: auto;

  &::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.neutral.c6};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.purple.light};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.purple.medium};
  }
`;
