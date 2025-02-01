import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { CustomButtonGroupContainer } from "./styles";

const CustomButtomGroup = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <CustomButtonGroupContainer>
      {currentSlide > 0 && (
        <MdKeyboardArrowLeft
          className="leftArrow"
          size={28}
          style={{ position: "absolute", left: 0, cursor: "pointer" }}
          onClick={previous}
        />
      )}

      <MdKeyboardArrowRight
        className="rightArrow"
        size={28}
        style={{ position: "absolute", right: 0, cursor: "pointer" }}
        onClick={next}
      />
    </CustomButtonGroupContainer>
  );
};

export default CustomButtomGroup;
