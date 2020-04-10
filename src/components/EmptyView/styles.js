import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalText } from "@styles/components";
import styled from "styled-components/native";

export const EmptyItem = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MaterialCommunityIcon = styled(MaterialCommunityIcons).attrs({
  size: 60,
})`
  opacity: 0.2;
  padding: 10px;
  color: ${({ theme }) => theme.defaultText};
`;

export const EmptyText = styled(GlobalText)`
  font-size: 16px;
  opacity: 0.8;
`;

export const SadIcon = styled(MaterialCommunityIcons).attrs({
  name: "emoticon-sad",
  size: 20,
})`
  color: ${({ theme }) => theme.defaultText};
`;
