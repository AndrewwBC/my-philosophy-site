import { useEffect, useState } from "react";
import { Nav, Post } from "./styles";
import { getPosts } from "./api";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Feed = () => {
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
      title: "Platão",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredByCategories, setFilteredByCategories] = useState("");

  const nav = useNavigate();

  useEffect(() => {
    // getPosts(setPosts, setIsLoading);
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

  async function handlePostDelete(postId: string) {
    const data = { postId };
    const getTokenFromStorage = localStorage.getItem("token");

    const url = {
      local: "http://localhost:8081/deletePost",
      nuvem: "https://my-philosophy-backend.onrender.com/deletePost",
    };

    try {
      const request = await fetch(url.local, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getTokenFromStorage}`,
        },
        body: JSON.stringify(data),
      });

      console.log(request);
    } catch (err) {
      console.log(err);
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
                    <textarea
                      readOnly
                      value={item.text.slice(0, 160).concat("...")}
                    />
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
                    <textarea
                      readOnly
                      value={item.text.slice(0, 160).concat("...")}
                    />
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
