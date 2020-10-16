import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import {
  CadastroForm,
  Background,
  GlobalStyle,
  PositionTypo,
  Divdos,
  Divtres,
  Divun,
} from "./styles";

export function Signup() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Background>
        <CadastroForm /*onSubmit={onSubmitLogin}*/>
          <PositionTypo>
            <Typography variant="h3" aling={"center"}>
              Signup
            </Typography>
          </PositionTypo>
          <TextField
            label={"name"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />
          <TextField
            label={"nickname"}
            type={"text"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />
          <TextField
            label={"Email"}
            type={"email"}
            variant="outlined"
            //onChange={onChangeInput}
            // value={form['email']}
            //name={'email'}
          />
          <TextField
            label={"Senha"}
            type={"password"}
            variant="outlined"
            // onChange={onChangeInput}
            // value={form['password']}
            //name={'password'}
          />
          <Button variant={"contained"} color={"primary"} type={"submit"}>
            Entrar
          </Button>
        </CadastroForm>
      </Background>
    </div>
  );
}
