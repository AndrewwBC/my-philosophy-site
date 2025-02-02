import styled from "styled-components";

export const PopularContainer = styled.article`
  margin-top: 90px;
  padding-left: 24px;
  display: flex;
  align-items: start;
  flex-direction: column;

  .titleContainer {
    p {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 48px;
    }
  }
`;

export const PopularCard = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #e9e9e9;

    &:hover {
      background-color: #fff;
    }

    .userAndViews {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .views {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .postTitleContainer {
      p {
        font-weight: 700;
        font-size: 20px;
        color: #444;
      }
    }
  }
`;
