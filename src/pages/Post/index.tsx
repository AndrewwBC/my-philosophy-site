import { useEffect, useRef } from "react";
import {
  EditorContainer,
  Icons,
  PostContainer,
  PostInfo,
  User,
  UserAndPostNumbers,
} from "./styles";
import UsernameAndImg from "../../components/UsernameAndImg";
import ClapsCommentsAndDateIcons from "../../components/ClapsCommentsAndDateIcons";

function Post() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current!.innerHTML =
      '<p><span style="background-color: rgb(230, 0, 0); color: rgb(205, 205, 205);">Platão foi um filósofo e matemático do período clássico da Grécia Antiga, autor de diversos diálogos filosóficos e fundador da Academia em Atenas, a primeira instituição de educação superior do mundo ocidental.</span></p>';
  }, []);

  return (
    <PostContainer>
      <PostInfo>
        <div className="title">
          <span>Platão e o mito da caverna</span>
        </div>
      </PostInfo>

      <EditorContainer>
        <div id="editor" className="ql-editor" ref={divRef}></div>
      </EditorContainer>

      <UserAndPostNumbers>
        <User>
          <UsernameAndImg
            username="Andrew Campos"
            imgUrl="https://media.licdn.com/dms/image/v2/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684103633996?e=1744243200&v=beta&t=UWg46XjeykG4ZwAGhHA9adJJteP9n9pCHtOlG5jKcGc"
          />
        </User>

        <Icons>
          <ClapsCommentsAndDateIcons
            clapsQuantity="200"
            commentsQuantity="200"
            date="Set 23, 2023"
          />
        </Icons>
      </UserAndPostNumbers>
    </PostContainer>
  );
}

export default Post;
