// import React from "react";
// import logo from './logo.svg';
// // import './App.css';
// // import { Login } from './components/login/index';
// import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";
// // import { Register } from './components/login'
import Home from './pages/Home';
import { StyledContainer } from "./components/Styles";
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <StyledContainer>
        <Home />
        <Login />
      </StyledContainer>
    </Router>
  );
}

export default App;





