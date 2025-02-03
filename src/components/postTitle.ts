import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface PostTitleProps extends HTMLAttributes<HTMLDivElement> {
  typeoftitle: "postCard" | "popularCard";
}

export const PostTitle: React.FC<PostTitleProps> = styled.div`
  font-weight: 700;
  font-size: 24px;

  ${({ typeoftitle }) =>
    typeoftitle === "postCard" &&
    css`
      font-weight: 700;
      font-size: 24px;
      color: #222;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    `}

  ${({ typeoftitle }) =>
    typeoftitle === "popularCard" &&
    css`
      font-weight: 700;
      font-size: 20px;
      color: #333;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    `}
`;
