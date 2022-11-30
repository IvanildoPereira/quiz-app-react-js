import styled from "styled-components"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Typography from "../components/Typography"
import Logo from "../assets/logo.png"

const Header = () =>{
    return(
        <HeaderContainer>
            <Container>
                <LogoImage src={Logo} alt = "Quiz - Learn with quizzes."/>
            </Container>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.primaryColor};
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
`

const LogoImage = styled.img`
    width: 70px;
    height: auto;
`

export default Header;