import { Card, CardContainer, CardHeader } from "./styles";
import UsernameAndImg from "../../../../components/UsernameAndImg";

import { PostTitle } from "../../../../components/postTitle";
import { useNavigate } from "react-router-dom";
import { CardProps } from "../types";

import ClapsCommentsAndDateIcons from "../../../../components/ClapsCommentsAndDateIcons";

function PostCard({ post }: CardProps) {
  const to = useNavigate();

  function handleCardClick() {
    to("/post");
  }

  return (
    <CardContainer>
      <CardHeader className="cardHeader">
        <ClapsCommentsAndDateIcons
          clapsQuantity="200"
          commentsQuantity="200"
          date="Set 23, 2024"
        />
      </CardHeader>

      <Card className="card" onClick={() => handleCardClick()}>
        <div className="textContent">
          <UsernameAndImg
            username="Andrew Campos"
            imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
          />
          <PostTitle className="title" typeoftitle="postCard">
            <p>{post.title}</p>
          </PostTitle>

          <div className="preview">
            <p>{post.text.slice(0, 80).trim().concat("...")}</p>
          </div>
        </div>

        <div className="postImage">
          <img src={post.image} alt="" />
        </div>
      </Card>
    </CardContainer>
  );
}

export default PostCard;
