import styled from "styled-components"
import { HEADING_SIZES, FONT_WEIGHT } from "../theme/fonts"
import { defaultTheme } from "../theme/themeColors"

type HeadingProps = {
    color?: keyof typeof defaultTheme;
    variant?: keyof typeof HEADING_SIZES;
    fontWeight?: keyof typeof FONT_WEIGHT;
    align?: "left" | "center" | "right",
    decoration?: "underline" | "line-through"
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${level}`}))<HeadingProps>`
    color: ${({ theme, color }) => color ? theme[color] : theme.primaryColor};
    text-align: ${props => props.align ? props.align : "left"};
    text-decoration: ${props => props.decoration ? props.decoration : "none"};
    ${props => props.variant && HEADING_SIZES[props.variant]};
`;

export default Heading;