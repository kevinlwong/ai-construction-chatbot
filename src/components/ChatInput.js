import React from "react";
import styled from "styled-components";

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.inputBg};
  width: 50%; /* Reduced width */
  max-width: 40vw; /* Maximum width */
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  outline: none;
`;

const FileButton = styled.label`
  cursor: pointer;
`;

const ChatInput = () => {
  return (
    <ChatInputContainer>
      <Input placeholder="Type your message here..." />
      <FileButton>
        📎
        <input type="file" style={{ display: "none" }} />
      </FileButton>
    </ChatInputContainer>
  );
};

export default ChatInput;
