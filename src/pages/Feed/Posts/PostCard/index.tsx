import { Card, CardContainer, CardHeader } from "./styles";
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

  const iconsData = [
    {
      icon: <PiHandsClapping className="ico" size={22} />,
      value: 234,
    },
    {
      icon: <FaRegComment className="ico" size={18} />,
      value: 129,
    },
    {
      icon: <FaCalendarAlt className="ico" size={18} />,
      value: "Set 24, 2024",
    },
  ];

  return (
    <CardContainer>
      <CardHeader className="cardHeader">
        {iconsData.map((icon) => (
          <div>
            {icon.icon}
            <span>{icon.value}</span>
          </div>
        ))}
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
