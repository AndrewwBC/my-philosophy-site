import { UsernameAndImgContainer } from "./styles";
import Green from "../Green";

interface UsernameAndImgProps {
  username: string;
  imgUrl: string;
}

function UsernameAndImg({ username, imgUrl }: UsernameAndImgProps) {
  return (
    <UsernameAndImgContainer>
      <div>
        <img
          width={28}
          height={28}
          src={imgUrl}
          alt=""
          className="profileImage"
        />
      </div>
      <Green text={username} />
    </UsernameAndImgContainer>
  );
}

export default UsernameAndImg;
