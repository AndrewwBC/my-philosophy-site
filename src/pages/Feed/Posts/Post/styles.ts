import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 24px;

  .ql-editor {
    height: max-content;
    padding: 0px;
    background-color: gainsboro;
  }
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg};

  width: 100%;

  .title {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    flex-grow: 1;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
`;
