import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("window").height;

export const List = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  padding: 0 20px;
  height: ${height / 6}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  opacity: 0.8;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: 18px;
  padding: 20px 0;
  color: ${({ theme }) => theme.defaultText};
`;
