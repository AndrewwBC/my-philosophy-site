import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .linkToLogin {
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
`;
