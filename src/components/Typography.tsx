import styled from "styled-components"
import { TYPOGRAPHY_SIZES, FONT_WEIGHT } from "../theme/fonts"
import { defaultTheme } from "../theme/themeColors"

interface TypographyProps{
    color?: keyof typeof defaultTheme;
    variant?: keyof typeof TYPOGRAPHY_SIZES;
    fontWeight?: keyof typeof FONT_WEIGHT;
    align?: "left" | "center" | "right",
    decoration?: "underline" | "line-through"
    tag?: "p" | "span"
}

const Typography = styled("p").attrs<TypographyProps>(({ tag }) => ({
    as: `${tag ? tag : "p"}`}))<TypographyProps>`
    color: ${({ theme, color }) => color ? theme[color] : theme.primaryColor};
    font-weight: ${props => props.fontWeight ? FONT_WEIGHT[props.fontWeight] : FONT_WEIGHT["normal"]};
    text-align: ${props => props.align ? props.align : "left"};
    text-decoration: ${props => props.decoration ? props.decoration : "none"};
    ${props => props.variant && TYPOGRAPHY_SIZES[props.variant]};
`

export default Typography;