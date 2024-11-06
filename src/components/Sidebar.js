import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "15vw" : "3vw")};
  transition: width 0.3s;
  overflow: hidden;
  background-color: ${(props) => props.theme.sidebarBg};
    // background-color: white;
  transition: width 0.5s ease; // Smooth transition for width

  display: flex;
  flex-direction: column;
  padding: 1vw;
`;

const SidebarButton = styled.button`
  background: transparent;
  top: 1vw;
    left: ${(props) => (props.isOpen ? "220px" : "1.5vw")}; // Adjust based on sidebar state

  position: absolute;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 2vw;
   transition: box-shadow 0.3s ease, transform 0.2s ease; /* Smooth transition for the shadow */

  &:hover {
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.15); /* Adjust the shadow properties as needed */
    transition-duration: 0.3s; /* Slow down the transition */
    }
          border-radius: 8px; // Optional: adds a subtle rounded edge

`;

const SearchInput = styled.input`
  margin: 3vw 0;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  outline: none;
  width: 90%;
  
`;

const ConversationList = styled.div`
  margin-top: 1vw;
  display: flex;
  flex-direction: column;
`;

const ConversationItem = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.chatBg};
  margin-bottom: 1vw;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample conversations for demonstration
  const conversations = [
    { id: 1, title: "Project Alpha", content: "Discuss project timelines" },
    { id: 2, title: "Budget Meeting", content: "Review project budgets" },
    {
      id: 3,
      title: "Client Discussion",
      content: "Feedback on initial designs",
    },
  ];

  // Filtered conversations based on search query
  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "◀" : "▶"}
      </SidebarButton>
      {isOpen && (
        <>
          <SearchInput
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ConversationList>
            {filteredConversations.map((conversation) => (
              <ConversationItem key={conversation.id}>
                {conversation.title}
              </ConversationItem>
            ))}
          </ConversationList>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
