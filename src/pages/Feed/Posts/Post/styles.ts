import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 24px;

  .ql-editor {
    height: max-content;
    padding: 0px;
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

export const EditorContainer = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
`;

export const UserAndPostNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 24px;
`;

export const User = styled.div`
  display: flex;

  img {
    height: 48px;
    width: 48px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  color: #777;

  div {
    display: flex;
    align-items: center;
  }

  .ico {
    color: ${({ theme }) => theme.paper.dark};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    .ico {
      height: 16px;
      width: 16px;
    }
  }
`;
