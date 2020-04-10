import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.secondary};
  justify-content: center;
  align-items: center;
  margin: 30px;
  bottom: 0;
  left: 0;
  z-index: 20;
`;

export const ColorModeIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.defaultText};
`;
