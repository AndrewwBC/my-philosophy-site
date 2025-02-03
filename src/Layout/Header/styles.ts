import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f9f9f9;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
  margin: 0 auto;
  z-index: 20;

  @media (max-width: 1200px) {
    padding: 18px 12px;
  }

  .logo p {
    font-size: 18px;
    font-weight: 600;
    font-family: "Nunito Sans", sans-serif;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 18px;
  }

  nav ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 24px;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 600px) {
      gap: 4px;
    }
  }

  li .penIcon {
    margin-bottom: 2px;
  }

  li {
    display: flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 4px;
    color: #222;
    cursor: pointer;

    &:hover {
      background-color: #811180;
      color: #f9f9f9;
    }
  }
`;
