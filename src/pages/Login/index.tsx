import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Content } from "./styles";
import { UserContext } from "../../context/userContext";
import { login } from "./api";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { MyInput } from "../../components/input";
import { MyForm } from "../../components/form";
import { MyButton } from "../../components/button";
import { MyNavUI } from "../../components/myNavUi";

const Login = () => {
  const { setData } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
      nav("/in/feed");
    }
    setIsLoading(false);
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(loginData);

    const userLogin = await login(
      {
        email: loginData.email,
        password: loginData.password,
      },
      setIsLoading
    );

    if (userLogin?.token) {
      setData({ name: "Andrew" });
    }
  }
  return (
    <Content>
      {isLoading && <Loading />}

      <p>Login</p>
      <MyForm>
        <label>
          <small>Email</small>
          <MyInput
            type="email"
            placeholder="Digite o seu email."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </label>
        <label>
          <small>Senha</small>
          <MyInput
            type="password"
            placeholder="Digite a sua senha."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </label>

        <MyButton onClick={handleSubmit} disabled={isLoading}>
          Entrar
        </MyButton>

        <MyNavUI>
          <div>
            <small>Não tem uma conta?</small>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </MyNavUI>
      </MyForm>
    </Content>
  );
};

export default Login;
