import React, { useState } from "react";
import axios from 'axios'
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
import { Link, useHistory } from "react-router-dom";
import { baseUrl } from "../../constantes";

export function Signup(props) {


const [name, setName] = useState("");
const [nickname, setNickName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useHistory();

const hendleName = (event) => {
const newName = event.target.value
setName (newName)

}

const hendleNickName = (event) =>{
const newNickName = event.target.value
setNickName (newNickName)

}

const hendleEmail = (event) =>{
const newEmail = event.target.value
setEmail (newEmail)

}

const hendlePassword = (event) =>{
const newPassword = event.target.value
setPassword (newPassword)

}

const handleSignup = async (event) =>{
  event.preventDefaul();

    const body = {
      name: name,
      nickname: nickname,
      email: email,
      password: password

    }
    try {
      const response = await axios.post(`${baseUrl}/user/signup`, body)

      localStorage.setItem("token", response.data.token);

      history.push("/newimage")

    } catch (error) {
      alert("Cadastro falhou, tente novamente");
      console.error(error);
    }
}

const handleGoToLogin = (event) =>{
  history.push("/login");
}




  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Background>
        <CadastroForm onSubmit={handleSignup}>
          <PositionTypo>
            <Typography variant="h3" aling={"center"}>
              Signup
            </Typography>
          </PositionTypo>
          <TextField
            label={"Name"}
            type={"name"}
            variant="outlined"
            onChange={hendleName}
            value={name}
            //name={'email'}
          />
          <TextField
            label={"Nickname"}
            type={"nickname"}
            variant="outlined"
            onChange={hendleNickName}
            value={nickname}
            //name={'email'}
          />
          <TextField
            label={"Email"}
            type={"email"}
            variant="outlined"
            onChange={hendleEmail}
            value={email}
            //name={'email'}
          />
          <TextField
            label={"Senha"}
            type={"password"}
            variant="outlined"
            onChange={hendlePassword}
            value={password}
            //name={'password'}
          />
          <Button variant={"contained"} color={"primary"} type={"submit"}>

            Entrar
          </Button>

          <Link onClick={handleGoToLogin}>
            login
          </Link>
        </CadastroForm>
      </Background>
    </div>
  );
}
