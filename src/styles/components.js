import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
