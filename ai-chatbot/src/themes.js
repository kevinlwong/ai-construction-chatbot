import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-family: Arial, sans-serif;
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#333333",
  sidebarBg: "#f0f0f0",
  chatBg: "#ffffff",
  inputBg: "#e9e9e9",
  borderColor: "#cccccc",
};

export const darkTheme = {
  body: "#333333",
  text: "#ffffff",
  sidebarBg: "#555555",
  chatBg: "#444444",
  inputBg: "#666666",
  borderColor: "#888888",
};
