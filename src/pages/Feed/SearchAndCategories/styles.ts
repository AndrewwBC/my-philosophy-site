import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 24px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const focusAnimation = keyframes`
    from {
        background-color: #fff;
    } to {
        background-color: #e9e9e9;
    }

`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #e9e9e9;
  grid-area: 1/1;

  .searchIcon {
    cursor: pointer;
    padding-left: 4px;
  }

  input {
    border: none;
    padding: 12px;
    border-radius: 10px;
    background-color: inherit;
    width: 100%;
    cursor: pointer;

    &:focus {
      animation: ${focusAnimation} 1s forwards;
    }
  }
`;
