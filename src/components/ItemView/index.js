import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import {
  CardText,
  DeleteBox,
  Item,
  ItemName,
  ItemQuantity,
  TrashIcon,
} from "./styles";

export default function ItemView({ name, quantity, onRemovePress, onPress }) {
  // state variables
  const conf = useSelector((state) => state.conf);

  return (
    <Item backgroundColor={conf.modeColor.secondary} onPress={() => onPress()}>
      <ItemName>
        <CardText
          color={conf.modeColor.defaultText}
          numberOfLines={1}
          ellipsizeMode="tail"
          ellipsizeText
        >
          {name}
        </CardText>
      </ItemName>
      {quantity !== "" && (
        <ItemQuantity>
          <CardText color={conf.modeColor.defaultText}>{quantity}x</CardText>
        </ItemQuantity>
      )}
      <DeleteBox onPress={() => onRemovePress()}>
        <TrashIcon />
      </DeleteBox>
    </Item>
  );
}

ItemView.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  onRemovePress: PropTypes.func,
  onPress: PropTypes.func,
};

ItemView.defaultProps = {
  quantity: "",
  onRemovePress: () => {},
  onPress: () => {},
};
