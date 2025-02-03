import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";
import { responsive } from "./responsive";
import CustomButtomGroup from "./CustomButtomGroup";
import { useNavigate } from "react-router-dom";

function Categories() {
  const to = useNavigate();

  const categoryList = [
    "Aristóteles",
    "Medieval",
    "Cristianismo",
    "Pré-Socrático",
    "Estoicismo",
    "Existencialismo",
    "Platonismo",
    "Platão",
    "Modernismo",
  ];

  function handleCategoryClick(category: String) {
    to(`/feed?category=${category.toLowerCase()}`);
  }

  return (
    <Container>
      <Carousel
        customButtonGroup={<CustomButtomGroup />}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        transitionDuration={100}
        containerClass="carouselContainer"
        itemClass="carouselItem"
        arrows={false}
      >
        {categoryList.map((category) => (
          <div onClick={() => handleCategoryClick(category)}>
            <p>{category}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default Categories;
