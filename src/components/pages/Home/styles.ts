import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 260px;

  .title {
    font-size: 32px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #b9b9b9;
  }

  button {
    background-color: #c175ff;
    padding: 12px 40px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    color: #f9f9f9;
    font-size: 16px;

    &:hover {
      background-color: #c175bb;
    }
  }
`;
