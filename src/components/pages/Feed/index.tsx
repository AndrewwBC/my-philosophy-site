import { useEffect, useState } from "react";
import { Nav, Post } from "./styles";
import { getPosts } from "./api";
import Loading from "../../Loading";

const Feed = () => {
  const categories = ["Platão", "Aristóteles", "Existencialismo"];

  interface PostsProps {
    id: string;
    created_at: string;
    title: string;
    text_paragraph: [
      {
        text: string;
      }
    ];
    categories: string[];
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
          {categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Nav>
      </header>

      {isLoading && <Loading />}

      {posts &&
        posts.map((item) => {
          if (
            (filteredByCategories &&
              item.categories[0] === filteredByCategories) ||
            item.categories[1] === filteredByCategories
          ) {
            return (
              <Post>
                <div className="titleAndDate">
                  <p>{item.title}</p>
                  <span>{item.created_at}</span>
                </div>
                <div className="textContent">
                  {item.text_paragraph.map(({ text }) => (
                    <p>{text}</p>
                  ))}
                </div>
                <div className="categories">
                  {item.categories.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </Post>
            );
          } else if (!filteredByCategories) {
            return (
              <Post>
                <div className="titleAndDate">
                  <p>{item.title}</p>
                  <span>{item.created_at}</span>
                </div>
                <div className="textContent">
                  {item.text_paragraph.map(({ text }) => (
                    <p>{text}</p>
                  ))}
                </div>
                <div className="categories">
                  {item.categories.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </Post>
            );
          }
        })}
    </>
  );
};

export default Feed;
