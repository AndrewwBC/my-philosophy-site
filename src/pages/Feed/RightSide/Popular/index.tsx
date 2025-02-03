import { PostTitle } from "../../../../components/postTitle";
import UsernameAndImg from "../../../../components/UsernameAndImg";
import myUseNavigate from "../../../../utils/useNavigate";
import { PopularCard, PopularContainer } from "./styles";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Popular() {
  const { to } = myUseNavigate();

  function handleCardClick() {
    to("/post");
  }

  return (
    <PopularContainer>
      <div className="titleContainer">
        <p>Postagens Populares</p>
      </div>
      <PopularCard onClick={() => handleCardClick()}>
        <div className="content">
          <div className="userAndViews">
            <UsernameAndImg
              username="Andrew Campos"
              imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
            />

            <div className="views">
              <MdOutlineRemoveRedEye size={24} />
              <span>2342 views</span>
            </div>
          </div>
          <PostTitle typeoftitle="popularCard">
            <p>Platão e o mito da Caverna</p>
          </PostTitle>
        </div>
      </PopularCard>
    </PopularContainer>
  );
}

export default Popular;
