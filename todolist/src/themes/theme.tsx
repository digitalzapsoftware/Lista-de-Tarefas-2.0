import { ThemeProvider } from "styled-components";

const theme = {

}

export const Theme: React.FC = ({ children }:any) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

