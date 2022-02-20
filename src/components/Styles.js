import styled from "styled-components";
import background from "../assets/background.jpg"
import Home from "../pages/Home";
import { Link } from 'react-router-dom';

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F1937",
  dark2: "#4B5563",
  dark3: "#9CA3A",
  red: "#DC2626"
}

export const StyledContainer = styled.div`
margin: 0;
min-height: 100vh;
display:flex;
justify-content: center;
align-items: center;
background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
backround-size: cover;
background-attatchment: fixed;`;

export const StyledTitle = styled.h2`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${(props) => props.color ? props.color : colors.primary};
padding: 5px;
margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-Align: center;
color: ${(props) => props.color ? props.color : colors.primary};
padding: 5px; 
margin-bottom: 25px;
`;

export const Avatar = styled.div`
width: 125px;
height: 125px;
border-radius: 30px;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
margin: auto;
`;

export const StyledButton = styled(Link)`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border: 3px solid ${colors.primary};
border-radius: 25px;
color: ${colors.primary};
text-decoration: none;
text-align: center;
transition: ease-in-out 0.3s;

&:hover{
  background-color: ${colors.primary};
  color: ${colors.theme};
  cursor: pointer;
}
`;

export const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin-top: 25px;
`;

export const StyledTextInput = styled.input`
width: 280px;
padding: 15px;
padding-left: 50px;
font-size: 17px;
letter-spacing: 1px;
color: ${colors.light2};
border:0;
display: block;
marging: 5px auto 10px auto;
transition: ease-in-out 0.3s;
${(props) => props.invalid && `background-color:${colors.red}; color: ${colors.primary};`}

&:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};

}`;

export const StyledLabel = styled.p`
text-align: left;
font-size: 13px;
font-weight: bold;
`;

export const StyledFormArea = styled.div`
background-color: ${props => props.bg || colors.light1};
text-align: center;
padding: 45px 55px;`;

export const styledFormButton = styled.div`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover{
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }`;
