import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@styles";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "./styles";

export default function FloatingButton({ onPress, iconName }) {
  return (
    <Button onPress={onPress}>
      <MaterialIcons name={iconName} color={colors.white} size={40} />
    </Button>
  );
}

FloatingButton.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
};

FloatingButton.defaultProps = {
  onPress: () => {},
};
