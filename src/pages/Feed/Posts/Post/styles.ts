import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 24px;
  height: 100vh;
`;

export const UserAndPostInfo = styled.div`
  padding: 4px 8px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #f4f4f4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  img {
    height: 80px;
    width: 80px;
  }

  span {
    font-size: 18px;
  }
`;
