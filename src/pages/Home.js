import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";
import Logo from "../assets/images.jpg"
const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }
            }>
                {/* <Avatar image={Logo} /> */}
            </div>
            <StyledTitle size={55}>
                Welcome
            </StyledTitle>
            <StyledSubTitle size={17}>
                Rent your item or find an item to take for rent
            </StyledSubTitle>
            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                {/* <StyledButton to="/register">Register</StyledButton> */}
            </ButtonGroup>
        </div>
    )
}

export default Home;