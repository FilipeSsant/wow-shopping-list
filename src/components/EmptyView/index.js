import PropTypes from "prop-types";
import React from "react";
import { EmptyItem, EmptyText, MaterialCommunityIcon, SadIcon } from "./styles";

export default function EmptyView({ icon, text }) {
  return (
    <EmptyItem>
      <MaterialCommunityIcon name={icon} />
      <EmptyText>
        {text} <SadIcon />
      </EmptyText>
    </EmptyItem>
  );
}

EmptyView.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
