import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "15vw" : "5vw")};
  transition: width 0.5s ease;
  overflow: visible;
  background-color: ${(props) => props.theme.sidebarBg};
  display: flex;
  flex-direction: column;
  padding: 1vw;
  position: relative; 
`;

const SidebarButton = styled.button`
  background: transparent;
  top: 1vw;
  padding: 1vw;
  left: ${(props) => (props.isOpen ? "220px" : "1vw")};
  position: absolute;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 2vw;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.15);
    transition-duration: 0.3s;
  }
  border-radius: 8px;
`;

const SearchInput = styled.input`
  margin: 6vw 0;
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
  overflow: visible;
`;

const ConversationItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  background-color: ${(props) => props.theme.chatBg};
  margin-bottom: 1vw;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  // Apply a fade-out effect on the right side of the text
  mask-image: linear-gradient(to right, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, black 80%, transparent);

  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
`;

// Ellipsis button
const EllipsisButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: ${(props) => props.theme.text};
  margin-left: 8px;
`;

// Dropdown menu container
const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  width: 150px;
  left: calc(100% - 50px);
  background-color: ${(props) => props.theme.sidebarBg};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

// Menu item style
const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: ${(props) => (props.isDelete ? "red" : props.theme.text)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
`;

const ConversationItem = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // If the click is outside both the button and the menu, close the menu
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ConversationItemContainer>
      <span>{title}</span>
      <EllipsisButton ref={buttonRef} onClick={toggleMenu}>⋮</EllipsisButton>
      <DropdownMenu ref={menuRef} isOpen={isMenuOpen}>
        <MenuItem>
          <span>📤</span> Share
        </MenuItem>
        <MenuItem>
          <span>✏️</span> Rename
        </MenuItem>
        <MenuItem>
          <span>📥</span> Archive
        </MenuItem>
        <MenuItem isDelete>
          <span>🗑️</span> Delete
        </MenuItem>
      </DropdownMenu>
    </ConversationItemContainer>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    { id: 1, title: "Project Beta" },
    { id: 2, title: "Budget Meeting" },
    { id: 3, title: "Client Discussion" },
  ];

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.title.toLowerCase().includes(searchQuery.toLowerCase())
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
              <ConversationItem key={conversation.id} title={conversation.title} />
            ))}
          </ConversationList>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
