import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@styles";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "./styles";

export default function ColorModeButton({
  onPress,
  iconName,
  iconColor,
  background,
}) {
  return (
    <Button background={background} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} color={iconColor} size={40} />
    </Button>
  );
}

ColorModeButton.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

ColorModeButton.defaultProps = {
  onPress: () => {},
  iconColor: colors.white,
};
