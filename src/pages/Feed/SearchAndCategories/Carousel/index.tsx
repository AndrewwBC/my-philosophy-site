import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";
import { responsive } from "./responsive";
import CustomButtomGroup from "./CustomButtomGroup";

function Categories() {
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
        <div>
          <p>Aristóteles</p>
        </div>
        <div>
          <p>Medieval</p>
        </div>
        <div>
          <p>Cristianismo</p>
        </div>
        <div>
          <p>Pré-Socrático</p>
        </div>
        <div>
          <p>Estoicismo</p>
        </div>
        <div>
          <p>Existencialismo</p>
        </div>
        <div>
          <p>Platonismo</p>
        </div>
        <div>
          <p>Platão</p>
        </div>
        <div>
          <p>Modernismo</p>
        </div>
      </Carousel>
    </Container>
  );
}

export default Categories;
