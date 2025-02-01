import { Container, Post } from "./styles";
import { useState } from "react";

function Posts() {
  interface PostsProps {
    id: string;
    title: string;
    text: string;
    created_at: string;
    categorie: string;
  }
  const [posts, setPosts] = useState<PostsProps[]>([
    {
      id: "1565",
      categorie: "grécia",
      created_at: "20/05/2024",
      text: "Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo",
      title: "Platão e o mito da caverna",
    },
    {
      id: "1565",
      categorie: "grécia",
      created_at: "20/05/2024",
      text: "Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo",
      title: "Platão e o mito da caverna",
    },
    {
      id: "1565",
      categorie: "grécia",
      created_at: "20/05/2024",
      text: "Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo Platão foi um filósofo",
      title: "Platão e o mito da caverna",
    },
  ]);

  if (posts)
    return (
      <Container>
        {posts.map((item) => {
          return (
            <Post>
              <div className="textContent">
                <div className="titleAndDate">
                  <span>Postagem realizada em {item.created_at}</span>
                  <p>{item.title}</p>
                </div>
                <div className="preview">
                  <textarea
                    readOnly
                    value={item.text.slice(0, 160).concat("...")}
                  />
                </div>
                <div className="categories">
                  <p>#{item.categorie}</p>
                </div>
              </div>
              <div className="postImage">
                <img
                  src="https://media.istockphoto.com/id/1066705000/pt/foto/classic-statues-plato-close-up.jpg?s=612x612&w=0&k=20&c=MDZVFXOgsaezaB2lo--daz9ziXJrbdmGoCqUo-kcWgA="
                  alt=""
                />
              </div>
            </Post>
          );
        })}
      </Container>
    );
}

export default Posts;
