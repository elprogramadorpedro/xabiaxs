import styled, { createGlobalStyle, css } from "styled-components";
import fondoinicio from "../imgs/fondoinicio.jpg";

export const LogoPosition = styled.div`
  width: 100vw;
  height: 10vh;

  padding-left: 80px;
  padding-top: 20px;
`;
export const MessagePosition = styled.div`
  width: 100vw;
  height: 10vh;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 35vw;
  padding-bottom: 50px;
  margin: 1px solid black;

  a {
    text-decoration: none;
  }
`;

export const Divum = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
`;
export const Divdois = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
`;
export const Divtres = styled.div`
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
html, body{
  margin: auto;
  width:100vw;
  height:100vh;
  font-size:16px;
  overflow:hidden;

  background-image: url(${fondoinicio});
 
}
`;
const Background = styled.div`
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export { GlobalStyle, Background };
