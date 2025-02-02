import { useState } from "react";
import PostCard from "./PostCard";
import { Container } from "./styles";

function Posts() {
  interface PostsProps {
    id: string;
    title: string;
    text: string;
    created_at: string;
    categorie: string;
  }
  const [posts] = useState<PostsProps[]>([
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
  return (
    <Container>
      {posts.map((item) => {
        return <PostCard item={item} />;
      })}
    </Container>
  );
}

export default Posts;
