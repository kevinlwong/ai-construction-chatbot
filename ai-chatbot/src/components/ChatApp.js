// src/components/ChatApp.js
import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import styled from "styled-components";

// Wrapper for ChatApp to ensure consistent layout
const ChatAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ChatApp = () => {
  const [response, setResponse] = useState(""); // State to hold the response

  return (
    <div>
      <ChatAppContainer>
        <ChatWindow response={response} />
        <ChatInput setResponse={setResponse} />
      </ChatAppContainer>
    </div>
  );
};

export default ChatApp;
