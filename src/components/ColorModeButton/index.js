import PropTypes from "prop-types";
import React from "react";
import { Button, ColorModeIcon } from "./styles";

export default function ColorModeButton({ onPress, iconName }) {
  return (
    <Button onPress={onPress}>
      <ColorModeIcon name={iconName} size={40} />
    </Button>
  );
}

ColorModeButton.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string.isRequired,
};

ColorModeButton.defaultProps = {
  onPress: () => {},
};
