import { Link } from "react-router-dom";
import { MyButton } from "../../components/button";
import { MyInput } from "../../components/input";
import { Container, Content } from "./styles";
import { MyNavUI } from "../../components/myNavUi";

export default function Register() {
  return (
    <Container>
      <Content>
        <p className="title">Registre-se</p>

        <form>
          <label>
            <small>Nome</small>
            <MyInput type="text" placeholder="Digite o seu nome" />
          </label>

          <label>
            <small>Email</small>
            <MyInput type="text" placeholder="Digite o seu email" />
          </label>

          <label>
            <small>Senha</small>
            <MyInput type="password" placeholder="Digite a sua senha" />
          </label>

          <MyButton>Cadastre-se</MyButton>

          <MyNavUI>
            <div>
              <small>Já possui uma conta?</small>
              <Link to="/login">Login</Link>
            </div>
          </MyNavUI>
        </form>
      </Content>
    </Container>
  );
}
