import { Link } from "react-router-dom";
import { Content } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/GlobalContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header>
      <Content>
        <Link to="/">φιλοσοφία</Link>
        <nav>
          <ul>
            <li>
              <Link to="/in/feed">Feed</Link>
            </li>
            <li>
              <Link to="/in/contact">Contato</Link>
            </li>

            {data.token ? (
              <li>
                <Link to="/in/auth/write">Postar</Link>
              </li>
            ) : (
              <li>
                <Link to="/in/login">Logar</Link>
              </li>
            )}
          </ul>
        </nav>
      </Content>
    </header>
  );
};

export default Header;
