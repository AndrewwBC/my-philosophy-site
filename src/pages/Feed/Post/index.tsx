import { useEffect, useState } from "react";
import { Content } from "./styles";
import Loading from "../../../components/Loading";
import axios from "axios";

const Post = () => {
  interface PostProps {
    id: string;
    created_at: string;
    title: string;
    categorie: string;
    text_paragraph: [
      {
        text: string;
      }
    ];
  }
  const [post, setPost] = useState<PostProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const queryParameters = new URLSearchParams(window.location.search);
    const postId = queryParameters.get("id");
    try {
      setIsLoading(!isLoading);

      const request = await axios.get(
        `http://localhost:8181/post/show/${postId}`
      );
      const response = await request.data;

      setPost(response.postList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(!isLoading);
      const textArea = document.getElementById("textArea")!;
      textArea.style.height = textArea.scrollHeight + "px";
    }
  }

  if (post)
    return (
      <Content>
        <div>
          <p className="date">Postagem realizada em 10/10/2024</p>
        </div>
        <div>
          <p className="title">Platão</p>
        </div>
        <div className="textContainer">
          <textarea
            id="textArea"
            value={post[0].post ? post[0].post : ""}
            readOnly
          ></textarea>
        </div>
      </Content>
    );
};

export default Post;
