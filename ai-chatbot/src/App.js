import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import Settings from "./components/Settings";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./themes";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const [response, setResponse] = useState([]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Settings toggleTheme={toggleTheme} />
          <ChatContainer>
            <ChatWindow response={response} />
          </ChatContainer>
          <ChatInput setResponse={setResponse} />
          {/* <ChatApp response={response} setResponse={setResponse} /> Pass as props */}

        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;