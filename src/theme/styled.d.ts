import "styled-components";
import { defaultTheme } from "./themeColors";

declare module "styled-components"{
    type ThemeType = typeof defaultTheme;

    export interface DefaultTheme extends ThemeType{};
}