import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
    }

    body{
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
    }
`
export default GlobalStyles;