import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 24px;
    font-weight: 600;
  }

  .register {
    border-top: 1px solid #c9c9c9;
    margin-top: 8px;
    padding-top: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      display: block;
      font-size: 16px;
    }

    .linkToRegister {
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
