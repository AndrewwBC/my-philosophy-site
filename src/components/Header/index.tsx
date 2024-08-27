import { Link } from "react-router-dom";
import { Content } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/GlobalContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header>
      <Content>
        <Link className="logo" to="/feed">
          <p>φιλοσοφία</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>

            {data.token ? (
              <li>
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
    </header>
  );
};

export default Header;
