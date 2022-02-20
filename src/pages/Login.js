import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors } from "../components/Styles";
import Logo from './../assets/images.jpg';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Member Login
                </StyledTitle>
            </StyledFormArea>
        </div>
    )
}

export default Login;