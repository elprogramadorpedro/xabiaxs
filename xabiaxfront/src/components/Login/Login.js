import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { Background, GlobalStyle, LoginForm, TitleCadastro } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { baseUrl } from "../../constantes";
import axios from "axios";

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleGoToSignup = () => {
    history.push("/cadastro");
  };

  const handleUpdateEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleUpdatePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/user/login`, body);

      localStorage.setItem("token", response.data.token);

      history.push("/newimage");
    } catch (error) {
      alert("Login falhou :(, teste os dados y tente novamente");
      console.error(error);
    }
  };
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Background>
        <LoginForm onSubmit={handleLogin}>
          <TextField
            label={"Email"}
            type={"email"}
            variant="outlined"
            value={email}
            onChange={handleUpdateEmail}
          />

          <TextField
            label={"Password"}
            type={"password"}
            variant="outlined"
            value={password}
            onChange={handleUpdatePassword}
          />

          <Button variant={"contained"} color={"primary"} type={"submit"}>
            Entrar
          </Button>

          <Link onClick={handleGoToSignup}>
            <TitleCadastro>Cadastro</TitleCadastro>
          </Link>
        </LoginForm>
      </Background>
    </div>
  );
}
