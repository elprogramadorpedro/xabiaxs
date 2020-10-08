import React from "react";
import styled  from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { AllPictures } from "./components/AllPictures/AllPictures";
import { HomePage } from "./components/HomePage/HomePage";
import { Login } from "./components/Login/Login";
import { NewImg } from "./components/NewImg/NewImg";
import { Signup } from "./components/Signup/Signup";


const AppContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:16px;
`



export default function App() {
  return (
    <Router>
      <AppContainer>
  
        <Switch>

        <Route path="/imagenes">
          <AllPictures />
          </Route>

          <Route path="/newimage">
          <NewImg />
          </Route>

          <Route path="/login">
          <Login />
          </Route>

          <Route path="/cadastro">
            <Signup />
          </Route>
          
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </AppContainer>
    </Router>
  );
}



