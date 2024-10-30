import React from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Settings = ({ toggleTheme }) => {
  return (
    <SettingsContainer>
      <button onClick={toggleTheme}>⚙️</button>
    </SettingsContainer>
  );
};

export default Settings;
