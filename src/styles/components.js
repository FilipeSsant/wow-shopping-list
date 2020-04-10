import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.background};
`;

export const GlobalText = styled.Text`
  color: ${({ theme }) => theme.defaultText};
`;
