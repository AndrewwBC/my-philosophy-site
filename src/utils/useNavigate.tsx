import { useNavigate } from "react-router-dom";

function myUseNavigate() {
  const to = useNavigate();

  return {
    to,
  };
}

export default myUseNavigate;
