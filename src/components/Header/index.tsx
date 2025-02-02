import { Link } from "react-router-dom";
import { Content, HeaderContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { IoCreateOutline } from "react-icons/io5";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Content>
        <Link className="logo" to="/">
          <p>φιλοσοφία</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Feed</Link>
            </li>

            {data.token ? (
              <li>
                <IoCreateOutline size={26} />
                <Link to="/auth/write">Postar</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
