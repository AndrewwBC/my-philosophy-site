import styled from "styled-components";

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding-left: 8px;

  .introText {
    font-size: 32px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  li a {
    font-size: 18px;
    padding-bottom: 2px;
    padding: 4px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #800080;
      color: #fff;
    }
  }
`;
