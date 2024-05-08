import { useEffect, useState } from "react";
import { Content } from "./styles";
import Loading from "../../../Loading";

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
      const request = await fetch(
        `https://my-philosophy-backend.onrender.com/getPost?id=${postId}`
      );
      const response = await request.json();
      setPost(response[0]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(!isLoading);
    }
  }

  console.log(post);

  if (!post) return <Loading />;
  else
    return (
      <Content>
        <div>
          <p className="date">Postagem realizada em {post.created_at}</p>
        </div>
        <div>
          <p className="title">{post.title}</p>
        </div>
        <div className="textContainer">
          {post.text_paragraph.map((item) => {
            return <p>{item.text}</p>;
          })}
        </div>
      </Content>
    );
};

export default Post;
