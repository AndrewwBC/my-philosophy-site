import styled from "styled-components";

export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  margin: 0 auto;

  .logo p {
    padding-left: 18px;
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    gap: 24px;

    @media (max-width: 600px) {
      gap: 4px;
    }
  }

  li a {
    padding: 4px 12px;
    border-radius: 4px;
    color: #222;
    &:hover {
      background-color: #811180;
      color: #f9f9f9;
    }
  }
`;
