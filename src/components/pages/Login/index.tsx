import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Content, Input } from "./styles";
import { UserContext } from "../../../context/GlobalContext";
import { login } from "./api";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { data, setData } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
    }
    setIsLoading(false);
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

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
      <form>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLoginData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLoginData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          Acesse
        </button>
      </form>
    </Content>
  );
};

export default Login;
