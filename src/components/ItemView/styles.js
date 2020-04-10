import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@styles";
import styled from "styled-components/native";

export const CardText = styled.Text`
  color: ${({ theme }) => theme.defaultText};
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
`;

export const ItemName = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: flex-start;
`;
export const ItemQuantity = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

export const DeleteBox = styled.TouchableOpacity`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

export const TrashIcon = styled(MaterialIcons).attrs({
  name: "delete",
  size: 20,
  color: colors.danger,
})``;
