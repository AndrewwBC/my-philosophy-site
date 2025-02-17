import { Link } from "react-router-dom";
import { MyButton } from "../../components/button";
import { MyInput } from "../../components/input";
import { Container, Content } from "./styles";
import { MyNavUI } from "../../components/myNavUi";
import FormGroup from "../../components/FormGroup";

export default function Register() {
  return (
    <Container>
      <Content>
        <p className="title">Registre-se</p>

        <form>
          <FormGroup label="Nome">
            <MyInput type="text" placeholder="Digite o seu nome" />
          </FormGroup>

          <FormGroup label="Email">
            <MyInput type="text" placeholder="Digite o seu email" />
          </FormGroup>

          <FormGroup label="Senha">
            <MyInput type="password" placeholder="Digite a sua senha" />
          </FormGroup>

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
