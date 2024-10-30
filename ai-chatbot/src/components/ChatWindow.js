import React from "react";
import styled from "styled-components";

const ChatWindowContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.chatBg};
`;

const ChatWindow = () => {
  return (
    <ChatWindowContainer>
      <p>Chat history will appear here...</p>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
