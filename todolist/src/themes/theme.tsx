import { ThemeProvider } from "styled-components";

const fontSizes :any = [14, 20, 96]
fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.DisplayExtraLarge = fontSizes[2]

const primay = '#256784'
const secondary = '#F9B531'

const theme = {
    fontSizes,
    colors: {
        primay,
        secondary
    }
}

export const Theme: any = ({ children }:any) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

