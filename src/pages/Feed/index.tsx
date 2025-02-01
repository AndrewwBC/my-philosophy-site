import { useEffect } from "react";
import Posts from "./Posts";
import { Container } from "./styles";
import SearchAndCategories from "./SearchAndCategories";

const Feed = () => {
  useEffect(() => {
    return () => console.log("fechou");
  }, []);

  return (
    <Container>
      <div className="firstChild">
        <SearchAndCategories />

        <Posts />
      </div>
    </Container>
  );
};

export default Feed;
