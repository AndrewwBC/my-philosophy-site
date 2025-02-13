export interface PostProps {
  id: string;
  title: string;
  text: string;
  created_at: string;
  categorie: string;
  image: string;
}

export interface CardProps {
  post: PostProps;
}
