import { Container } from "./styles";
import { ClapsCommentsAndDateIconsProps } from "./types";

import { PiHandsClapping } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function ClapsCommentsAndDateIcons({
  clapsQuantity,
  commentsQuantity,
  date,
}: ClapsCommentsAndDateIconsProps) {
  const iconsData = [
    {
      icon: <PiHandsClapping className="ico" size={22} />,
      value: clapsQuantity,
    },
    {
      icon: <FaRegComment className="ico" size={18} />,
      value: commentsQuantity,
    },
    {
      icon: <FaCalendarAlt className="ico" size={18} />,
      value: date,
    },
  ];

  return (
    <>
      <Container>
        {iconsData.map((icon) => (
          <div>
            {icon.icon}
            <span>{icon.value}</span>
          </div>
        ))}
      </Container>
    </>
  );
}

export default ClapsCommentsAndDateIcons;
