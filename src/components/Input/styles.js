import { colors } from "@styles";
import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

export const InputTextBoxStyled = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  height: 50px;
  width: ${({ width }) => width || `328px`};
  border-radius: 6px;

  ${({ error }) =>
    error &&
    css`
      border: ${colors.danger};
    `}
`;

export const LabelStyled = styled(Animated.Text)`
  position: absolute;
  color: ${({ theme }) => theme.defaultText};
`;

export const ErrorLabelStyled = styled.Text`
  width: ${({ width }) => width || `328px`};
  font-size: 14px;

  color: ${colors.danger};
  padding: 5px;
`;

export const InputTextStyled = styled.TextInput`
  margin: 0 10px;
  height: 50px;
  border: none;
  font-size: 18px;
  position: relative;
  color: ${({ theme }) => theme.defaultText};
`;
