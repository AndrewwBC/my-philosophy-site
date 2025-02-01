import styled from "styled-components";

export const Container = styled.div`
  padding-right: 24px;
`;

export const Post = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  padding-left: 4px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #bdbdbd, -5px -5px 10px #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  .textContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .titleAndDate {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    p {
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }

    span {
      color: gray;
      margin-bottom: 8px;
    }
  }

  .preview {
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

  .postImage {
    img {
      height: 154px;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;
