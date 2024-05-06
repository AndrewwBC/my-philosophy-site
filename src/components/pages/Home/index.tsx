import { Link } from "react-router-dom";
import { Content } from "./styles";

const Home = () => {
  return (
    <main>
      <Content>
        <h1 className="title">Estudos em Filosofia</h1>
        <Link to="in/feed">
          <button>Acesse</button>
        </Link>
      </Content>
    </main>
  );
};

export default Home;
