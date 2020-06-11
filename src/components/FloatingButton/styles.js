import { colors } from '@styles';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  margin: 30px;
  bottom: 0;
  right: 0;
  z-index: 20;
`;
