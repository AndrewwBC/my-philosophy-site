import styled from "styled-components";

export const Content = styled.section`
  max-width: 800px;
  margin: 32px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 12px;

  p {
    border-bottom: 1px solid grey;
    margin-bottom: 24px;
    padding-bottom: 4px;
    max-width: max-content;
    font-size: 18px;
  }

  .textContainer {
    background-color: gray;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
    margin: 12px 0px;
    height: 600px;

    p {
      font-size: 18px;
    }
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
