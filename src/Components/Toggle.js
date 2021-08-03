import { createGlobalStyle } from "styled-components"

export const lightTheme = {
}

export const darkTheme = {
    body: "blue",
    fontColor: "black"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
`;