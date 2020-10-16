import styled, { createGlobalStyle, css } from "styled-components";
import fondocadastro from "../imgs/fondocadastro.jpg";

export const CadastroForm = styled.form`
  display: grid;
  gap: 16px;
  padding-bottom: 10vh;
`;
export const PositionTypo = styled.div`
  display: flex;
  justify-content: center;
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
  background-image: url(${fondocadastro});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { GlobalStyle, Background };
