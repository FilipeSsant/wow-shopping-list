import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${({ background }) => background};
  justify-content: center;
  align-items: center;
  margin: 30px;
  bottom: 0;
  left: 0;
  z-index: 20;
`;
