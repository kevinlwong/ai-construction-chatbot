import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext.js"
import './Settings.css'

const SettingsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Settings = ({ toggleTheme }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  
  const toggleMenu = (event) => {
    setIsSettingsOpen((prevState) => !prevState);
    event.stopPropagation();
  };

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsSettingsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SettingsContainer>
      <button onClick={toggleMenu}>⚙️</button>

      {isSettingsOpen && (
        <div ref={menuRef} className={`settings-menu ${theme}`}>
          <button onClick={toggleTheme} className="settings-option">Toggle Theme</button>
          <div className="settings-option">User Settings</div>
        </div>
      )}
    </SettingsContainer>
  );
};

export default Settings;
