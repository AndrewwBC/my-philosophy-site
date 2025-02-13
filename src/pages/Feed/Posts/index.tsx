import { useState } from "react";
import PostCard from "./PostCard";
import { Container } from "./styles";

import plato from "../../../assets/images/plato.jpg";
import aristotle from "../../../assets/images/aristotle.jpeg";
import nietzsche from "../../../assets/images/nietzsche.jpeg";
import { PostProps } from "./types";

function Posts() {
  const [posts] = useState<PostProps[]>([
    {
      id: "1565",
      categorie: "filosofia",
      created_at: "20/05/2024",
      text: "Platão foi um dos principais filósofos da Grécia Antiga, conhecido por suas ideias sobre a realidade e o conhecimento, expressas no famoso 'Mito da Caverna'.",
      title: "Platão e o mito da caverna",
      image: plato,
    },
    {
      id: "1566",
      categorie: "filosofia",
      created_at: "18/04/2024",
      text: "Aristóteles, discípulo de Platão, desenvolveu uma filosofia baseada na lógica e na observação, sendo considerado o pai da ciência moderna.",
      title: "O pensamento lógico de Aristóteles",
      image: aristotle,
    },
    {
      id: "1567",
      categorie: "filosofia",
      created_at: "10/03/2024",
      text: "Friedrich Nietzsche questionou os valores morais tradicionais e propôs o conceito do 'Super-Homem', que representa a superação dos limites impostos pela sociedade.",
      title: "Nietzsche e o conceito de Super-Homem",
      image: nietzsche,
    },
  ]);

  return (
    <Container>
      {posts.map((item) => {
        return <PostCard post={item} />;
      })}
    </Container>
  );
}

export default Posts;
