import { memo, useEffect } from "react";
import Posts from "./Posts";
import { Container } from "./styles";
import SearchAndCategories from "./SearchAndCategories";
import Popular from "./RightSide/Popular";

const Feed = () => {
  useEffect(() => {
    return () => console.log("fechou");
  }, []);

  return (
    <Container>
      <div>
        <SearchAndCategories />

        <Posts />
      </div>
      <div>
        <Popular />
      </div>
    </Container>
  );
};

export default memo(Feed);
