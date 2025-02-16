import { useEffect, useRef } from "react";
import { PostContainer, PostInfo } from "./styles";

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

      <div id="editor" className="ql-editor" ref={divRef}></div>
    </PostContainer>
  );
}

export default Post;
