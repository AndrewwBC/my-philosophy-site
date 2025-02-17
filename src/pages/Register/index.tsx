import { Link } from "react-router-dom";
import { MyButton } from "../../components/button";
import { MyInput } from "../../components/input";

import { MyNavUI } from "../../components/myNavUi";
import FormGroup from "../../components/FormGroup";
import { MyForm } from "../../components/form";
import { LoginAndRegisterContent } from "../../components/loginAndRegisterContainer";

export default function Register() {
  return (
    <LoginAndRegisterContent>
      <span>Registre-se</span>

      <MyForm>
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
      </MyForm>

      <MyNavUI>
        <small>Já possui uma conta?</small>
        <Link to="/login">Login</Link>
      </MyNavUI>
    </LoginAndRegisterContent>
  );
}
