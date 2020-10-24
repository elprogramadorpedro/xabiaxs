import styled, { createGlobalStyle, css } from "styled-components";
import fondocadastro from "../imgs/fondocadastro.jpg";

export const CadastroForm = styled.form`
  display: grid;
  gap: 16px;
  padding-bottom: 10vh;
  height: 70vh;
  width: 30vh;
  justify-content: center;
  align-self: center;
  margin-left: 400px;
`;
export const PositionTypo = styled.div`
  display: flex;
  justify-content: center;
`;

const GaleryImages = styled.div`
  display: flex;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  border: 1px;
`;

const DivGaleryCadastroForm = styled.div`
  justify-content: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const InformacoesImages = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export { DivGaleryCadastroForm, GaleryImages };
