import {
  Card,
  CardContainer,
  CardHeader,
  ProfileAndCreationDate,
} from "./styles";
import Green from "../../../../components/Green";
import UsernameAndImg from "../../../../components/UsernameAndImg";

import { PostTitle } from "../../../../components/postTitle";
import { useNavigate } from "react-router-dom";
import { CardProps } from "../types";

import { PiHandsClapping } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function PostCard({ post }: CardProps) {
  const to = useNavigate();

  function handleCardClick() {
    to("/post");
  }

  return (
    <CardContainer>
      <CardHeader className="cardHeader">
        <div>
          <PiHandsClapping size={22} color="black" />
          234
        </div>
        <div>
          <FaRegComment size={18} color="black" />
          129
        </div>
        <div>
          <FaCalendarAlt size={18} />
          Set 24, 2024
        </div>
      </CardHeader>

      <Card className="card" onClick={() => handleCardClick()}>
        <div className="textContent">
          <ProfileAndCreationDate>
            <UsernameAndImg
              username="Andrew Campos"
              imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
            />

            <Green text="Set 24, 2024" />
          </ProfileAndCreationDate>
          <PostTitle typeoftitle="postCard">
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
