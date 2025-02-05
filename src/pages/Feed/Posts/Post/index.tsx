import { useEffect, useRef } from "react";
import { PostContainer, UserAndPostInfo } from "./styles";
import UsernameAndImg from "../../../../components/UsernameAndImg";

function Post() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const innerHTML =
    // const innerHTMLFixed = innerHTML.replace("<br>", "<br/>");
    // divRef.current!.innerHTML = innerHTMLFixed;
  }, []);

  return (
    <PostContainer>
      <UserAndPostInfo>
        <div className="user">
          <UsernameAndImg
            username="Andrew Campos"
            imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
          />
        </div>
      </UserAndPostInfo>

      <div id="editor" className="ql-editor" ref={divRef}></div>
    </PostContainer>
  );
}

export default Post;
