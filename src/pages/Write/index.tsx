import { ChangeEvent, useState } from "react";
import { Content, Input } from "./styles";
import { postAPI } from "./api";

import { PostDataProps } from "./types";
import MyQuill from "./quill/MyQuill";

const Write = () => {
  const [postData, setPostData] = useState<PostDataProps>({
    title: "",
    text: "",
    categorie: "",
  });

  function handlePost() {
    if (postData) postAPI(postData);
  }
  return <MyQuill />;

  return (
    <Content>
      <p>Escreva a postagem.</p>

      <label>
        Título
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPostData((previewData) => ({
              ...previewData,
              title: e.target.value,
            }))
          }
          value={postData?.title}
          placeholder="Título"
        />
      </label>

      {/* <label>
        Texto
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPostData((previewData) => ({
              ...previewData,
              text: e.target.value,
            }))
          }
          style={{ height: 400 }}
          value={postData?.text}
        />
      </label> */}

      <MyQuill />

      <label>
        Categoria
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPostData((previewData) => ({
              ...previewData,
              categorie: e.target.value,
            }))
          }
          value={postData?.categorie}
          placeholder="Categoria"
        />
      </label>

      <button onClick={handlePost}>Postar</button>
    </Content>
  );
};

export default Write;
