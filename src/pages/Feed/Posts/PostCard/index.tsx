import { Card, ProfileAndCreationDate } from "./styles";

import Green from "../../../../components/Green";
import myUseNavigate from "../../../../utils/useNavigate";
import UsernameAndImg from "../../../../components/UsernameAndImg";
import { PostTitle } from "../../../../components/postTitle";

function PostCard({ item }: any) {
  const { to } = myUseNavigate();

  function handleCardClick() {
    to("/post");
  }

  return (
    <Card onClick={() => handleCardClick()}>
      <div className="textContent">
        <ProfileAndCreationDate>
          <UsernameAndImg
            username="Andrew Campos"
            imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
          />

          <Green text="Set 24, 2024" />
        </ProfileAndCreationDate>

        <PostTitle typeoftitle="postCard">
          <p>{item.title}</p>
        </PostTitle>

        <div className="preview">
          <p>{item.text.slice(0, 80).trim().concat("...")}</p>
        </div>
      </div>

      <div className="postImage">
        <img
          src="https://media.istockphoto.com/id/1066705000/pt/foto/classic-statues-plato-close-up.jpg?s=612x612&w=0&k=20&c=MDZVFXOgsaezaB2lo--daz9ziXJrbdmGoCqUo-kcWgA="
          alt=""
        />
      </div>
    </Card>
  );
}

export default PostCard;
