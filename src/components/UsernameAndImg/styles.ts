import styled from "styled-components";

export const UsernameAndImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    border-radius: 999px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 8px;

    .username {
      background-color: ${({ theme }) => theme.green.medium};
      border-radius: 4px;
      padding: 2px 4px;
      font-size: 14px;
      font-weight: 500;

      &:hover {
        background-color: ${({ theme }) => theme.green.light};
        transition: 0.3s;
      }
    }
  }
`;
