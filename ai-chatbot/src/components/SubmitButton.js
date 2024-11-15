import styled from "styled-components";
const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonTextColor};
  cursor: pointer;
`;

export default SubmitButton;