import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 240px;

  .title {
    font-size: 32px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #b9b9b9;
  }

  button {
    background-color: #c175ff;
    padding: 12px 32px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;
