import { useRef } from "react";
import { Container, SearchContainer } from "./styles";
import { CiSearch } from "react-icons/ci";
import Categories from "./Carousel";

function SearchAndCategories() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <SearchContainer>
        <CiSearch
          className="searchIcon"
          onClick={() => inputRef.current?.focus()}
          size={28}
        />
        <input ref={inputRef} type="text" placeholder="Pesquisar" />
      </SearchContainer>

      <Categories />
    </Container>
  );
}

export default SearchAndCategories;
