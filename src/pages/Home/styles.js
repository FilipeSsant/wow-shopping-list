import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("window").height;

export const List = styled.View`
  flex: 1;
`;

export const DeleteBox = styled.TouchableOpacity`
  flex: 0.2;
  justify-content: center;
  align-items: flex-end;
`;

export const Box = styled.View`
  padding: 0 20px;
  height: ${height / 6}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
