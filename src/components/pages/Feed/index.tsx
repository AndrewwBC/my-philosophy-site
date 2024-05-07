import { useEffect, useState } from "react";
import { Nav, Post } from "./styles";
import { getPosts } from "./api";
import Loading from "../../Loading";

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

  useEffect(() => {
    getPosts(setPosts, setIsLoading);
    return;
  }, []);

  console.log(posts);

  return (
    <>
      <header>
        <Nav>
          {posts.map(({ categorie }, index) => (
            <li
              key={index}
              onClick={(e) =>
                setFilteredByCategories(e.currentTarget.textContent!)
              }
            >
              {categorie}
            </li>
          ))}
        </Nav>
      </header>

      {isLoading && <Loading />}

      {posts &&
        posts.map((item) => {
          if (filteredByCategories && item.categorie === filteredByCategories) {
            return (
              <Post>
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
              <Post>
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
