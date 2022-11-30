import styled from "styled-components";
import { FONT_SIZES } from "../theme/fonts";
import { defaultTheme } from "../theme/themeColors";

interface ButtonProps{
    background?: keyof typeof defaultTheme;
    color?: keyof typeof defaultTheme;
    outlined?: boolean;
    fontSize?: keyof typeof FONT_SIZES;
}

const Button = styled.button<ButtonProps>`
    cursor: pointer;
    font-weight: bold;
    font-size: ${({ fontSize }) => fontSize ? FONT_SIZES[fontSize] : FONT_SIZES.body3}px;
    padding: 10px 40px;
    border-radius: 5px;
    background-color: ${({ theme, background }) => background ? theme[background] : theme.primaryColor};
    color: ${({ theme, color }) => color ? theme[color] : theme.onPrimaryColor};
    ${({ theme, color, outlined }) => outlined && {
        border: `1px solid ${color ? theme[color] : theme.onPrimaryColor}`
    }}
`;

export default Button;