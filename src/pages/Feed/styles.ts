import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  li {
    cursor: pointer;
  }
`;

export const Post = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  padding: 12px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #bdbdbd, -5px -5px 10px #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  .titleAndDate {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    p {
      font-size: 24px;
      font-weight: 600;
    }

    span {
      color: gray;
      margin-bottom: 8px;
    }
  }

  .textContent {
    textarea {
      resize: none;
      border: none;
      font-size: 16px;
      color: #a9a9a9;
      background-color: inherit;
      width: 100%;
      overflow: hidden;
      height: max-content;
    }

    p {
      color: #222;
    }
  }

  .categories {
    display: flex;
    gap: 4px;
    text-transform: lowercase;
    p {
      color: gray;
    }
  }
`;
