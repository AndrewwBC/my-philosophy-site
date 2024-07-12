import { useEffect, useState } from "react";
import { Nav, Post } from "./styles";
import { getPosts } from "./api";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  interface PostsProps {
    id: string;
    created_at: string;
    title: string;
    text_paragraph: [
      {
        text: string;
      }
    ];
    categorie: string;
  }
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredByCategories, setFilteredByCategories] = useState("");

  const nav = useNavigate();

  useEffect(() => {
    getPosts(setPosts, setIsLoading);
    return () => console.log("fechou");
  }, []);

  console.log(posts);

  function handleClick(postId: string) {
    nav(`/in/feed/post?id=${postId}`);
  }

  function handleCategories(categorie: string) {
    if (categorie != filteredByCategories) {
      setFilteredByCategories(categorie);
    } else {
      setFilteredByCategories("");
    }
  }

  if (posts)
    return (
      <>
        <header>
          <Nav>
            {posts.map(({ categorie }, index) => (
              <li
                key={index}
                onClick={(e) => handleCategories(e.currentTarget.textContent!)}
              >
                {categorie}
              </li>
            ))}
          </Nav>
        </header>

        {isLoading && <Loading />}

        {posts &&
          posts.map((item) => {
            if (
              filteredByCategories &&
              item.categorie === filteredByCategories
            ) {
              return (
                <Post onClick={() => handleClick(item.id)}>
                  <div className="titleAndDate">
                    <span>Postagem realizada em {item.created_at}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="textContent">
                    {item.text_paragraph.map(({ text }) => (
                      <p>{text}</p>
                    ))}
                  </div>
                  <div className="categories">
                    <p>#{item.categorie}</p>
                  </div>
                </Post>
              );
            } else if (!filteredByCategories) {
              return (
                <Post onClick={() => handleClick(item.id)}>
                  <div className="titleAndDate">
                    <span>Postagem realizada em {item.created_at}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="textContent">
                    {item.text_paragraph.map(({ text }) => (
                      <p>{text}</p>
                    ))}
                  </div>
                  <div className="categories">
                    <p>#{item.categorie}</p>
                  </div>
                </Post>
              );
            }
          })}
      </>
    );
};

export default Feed;
