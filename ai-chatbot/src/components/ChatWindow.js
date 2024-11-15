import React from "react";
import styled from "styled-components";

const ChatWindowContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  z-index: 0;
  background-color: ${(props) => props.theme.chatBg};
`;

const ChatWindow = ({response}) => {
  return (
    <ChatWindowContainer>
      <div>
            <p>{response ? response : "Chat history will appear here..."}</p>
        </div>

    </ChatWindowContainer>
  );
};

export default ChatWindow;
