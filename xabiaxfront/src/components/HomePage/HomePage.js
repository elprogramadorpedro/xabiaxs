import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { ButtonsContainer } from "./styles";
import { Link } from "react-router-dom";
import {
  Background,
  GlobalStyle,
  Divum,
  Divdois,
  Divtres,
  LogoPosition,
  MessagePosition,
} from "./styles";
import logo from "../imgs/logoun.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));

export function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <GlobalStyle></GlobalStyle>

      <LogoPosition>
        <img src={logo} alt={logo} width="100px" />
      </LogoPosition>

      <MessagePosition></MessagePosition>
      <Background>
        <Divtres>
          <Divdois>
            <ButtonsContainer className={classes.root}>
              <Link to={"/login"}>
                <Button variant={"outlined"} color={"secundary"}>
                  Login
                </Button>
              </Link>

              <Link to={"/cadastro"}>
                <Button variant={"contained"} color={"primary"}>
                  Cadastro
                </Button>
              </Link>
            </ButtonsContainer>
          </Divdois>
          <Divum></Divum>
        </Divtres>
      </Background>
    </div>
  );
}
