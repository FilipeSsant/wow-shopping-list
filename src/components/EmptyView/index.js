import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { EmptyItem, EmptyText, MaterialCommunityIcon, SadIcon } from "./styles";

export default function EmptyView({ icon, text, communityIcon }) {
  // state variables
  const conf = useSelector((state) => state.conf);

  return (
    <EmptyItem>
      <MaterialCommunityIcon name={icon} color={conf.modeColor.defaultText} />
      <EmptyText color={conf.modeColor.defaultText}>
        {text} <SadIcon color={conf.modeColor.defaultText} />
      </EmptyText>
    </EmptyItem>
  );
}

EmptyView.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  communityIcon: PropTypes.bool,
};

EmptyView.defaultProps = {
  communityIcon: false,
};
