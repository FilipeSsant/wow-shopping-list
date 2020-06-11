import PropTypes from "prop-types";
import React from "react";
import {
  CardText,
  DeleteBox,
  Item,
  ItemName,
  ItemQuantity,
  TrashIcon,
} from "./styles";

export default function ItemView({ name, quantity, onRemovePress, onPress }) {
  return (
    <Item onPress={() => onPress()}>
      <ItemName>
        <CardText numberOfLines={1} ellipsizeMode="tail" ellipsizeText>
          {name}
        </CardText>
      </ItemName>
      {quantity !== "" && (
        <ItemQuantity>
          <CardText>{quantity}x</CardText>
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
