import { colors } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import styled, { createGlobalStyle, css } from "styled-components";
import fondologin from "../imgs/fondologin.jpg";

export const LoginForm = styled.form`
  display: grid;
  gap: 16px;
  padding-bottom: 50vh;
`;
const GlobalStyle = createGlobalStyle`
html, body{
  margin: 0;
  width:100vw;
  height:100vh;
  font-size:16px;
  overflow:hidden;
}
`;
const Background = styled.div`
  background-image: url(${fondologin});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCadastro = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #c4c4c4;
`;

export { GlobalStyle, Background };
