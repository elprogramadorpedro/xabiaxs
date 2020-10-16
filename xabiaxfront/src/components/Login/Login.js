import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { Background, GlobalStyle, LoginForm, TitleCadastro } from "./styles";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Background>
        <LoginForm /*onSubmit={onSubmitLogin}*/>
          <TextField
            label={"Email"}
            type={"email"}
            variant="outlined"
            //onChange={onChangeInput}
            //value={form['email']}
            //name={'email'}
          />

          <TextField
            label={"Senha"}
            type={"password"}
            variant="outlined"
            //onChange={onChangeInput}
            //value={form['password']}
            //name={'password'}
          />

          <Button variant={"contained"} color={"primary"} type={"submit"}>
            Entrar
          </Button>

          <Link to={"/cadastro"}>
            <TitleCadastro>Cadastro </TitleCadastro>
          </Link>
        </LoginForm>
      </Background>
    </div>
  );
}
