import React, { useState } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import axios from "axios";

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

const ChatInput = ({setResponse}) => {
  const [userInput, setUserInput] = useState("");
  // const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://your-backend.onrender.com/api/chat', {prompt: userInput});
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error", error);
      setResponse("An error occurred while generating the response.")
    }
  };


    return (
    <ChatInputContainer>
      <Input 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Type your message here..." />
      <FileButton>
        📎
        <input type="file" style={{ display: "none" }} />
      </FileButton>
      {/* <button onClick={handleSubmit}>Send</button> */}
      <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
      {/* <p>{response}</p> Display the API response */}
      {/* need to generatate response in ChatWindow.js */}
    </ChatInputContainer>
  );
};

export default ChatInput;
