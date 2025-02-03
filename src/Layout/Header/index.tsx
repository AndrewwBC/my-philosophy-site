import { Link, useNavigate } from "react-router-dom";
import { Content, HeaderContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { IoCreateOutline } from "react-icons/io5";

const Header = () => {
  const { data } = useContext(UserContext);
  const to = useNavigate();

  function handleTo(path: string) {
    to(path);
  }

  return (
    <HeaderContainer>
      <Content>
        <Link className="logo" to="/">
          <p>φιλοσοφία</p>
        </Link>
        <nav>
          <ul>
            <li onClick={() => handleTo("/feed")}>
              <span>Feed</span>
            </li>

            {data.token ? (
              <li onClick={() => handleTo("/auth/write")}>
                <IoCreateOutline className="penIcon" size={26} />
                <span>Postar</span>
              </li>
            ) : (
              <li onClick={() => handleTo("/login")}>
                <span>Login</span>
              </li>
            )}
          </ul>
        </nav>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
