import { EmptyView, FloatingButton, Input, ItemView } from "@components";
import { Container } from "@styles/components";
import validate from "@utils/validator";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Alert, Animated, FlatList, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Box, Footer, FooterText } from "./styles";

export default function ListDetail({ route, navigation }) {
  // animation variables
  const [floatingButtonAnimation] = useState(new Animated.Value(0));

  //redux
  const { listIndex } = route.params;
  const items = useSelector((state) => state.lists[listIndex].items);
  const list = useSelector((state) => state.lists[listIndex]);
  const dispatch = useDispatch();

  // state variables
  const [error, setError] = useState({
    name: "",
    quantity: "",
  });
  const [data, setData] = useState({
    name: "",
    quantity: "",
  });
  const [keyboardShow, setKeyboardShow] = useState(false);

  const keyboardListenerShow = () => {
    setKeyboardShow(true);
  };

  const keyboardListenerHide = () => {
    setKeyboardShow(false);
  };

  // effects funcs
  // on page enter
  useEffect(() => {
    navigation.setOptions({
      headerTitle: list.name,
    });
    // keyboard listener
    Keyboard.addListener("keyboardDidShow", keyboardListenerShow);
    Keyboard.addListener("keyboardDidHide", keyboardListenerHide);
  }, []);

  useEffect(() => {
    Animated.timing(floatingButtonAnimation, {
      toValue: keyboardShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [keyboardShow]);

  const inputValue = async (value) => {
    await setData({ ...data, ...value });
  };

  const addItem = async () => {
    let errorArray = {
      name: "",
      quantity: "",
    };

    // clear error array
    setError(errorArray);

    const { name, quantity } = await data;

    const nameValidatorError = validate(name, "required");
    const quantityValidatorError = validate(quantity, "quantity");

    if (nameValidatorError) {
      errorArray = {
        ...errorArray,
        name: nameValidatorError,
      };
      return setError(errorArray);
    }

    if (quantityValidatorError) {
      errorArray = {
        ...errorArray,
        quantity: quantityValidatorError,
      };

      return setError(errorArray);
    }

    await dispatch({
      type: "ADD_ITEM",
      listIndex,
      item: { name: data.name, quantity },
    });

    // clear data array
    await setData({
      name: "",
      quantity: "",
    });
  };

  const showAlert = (index) => {
    Alert.alert(
      "deseja mesmo excluir este item?",
      "esta operação não poderá ser desfeita",
      [
        {
          text: "não",
          style: "cancel",
        },
        { text: "sim", onPress: () => deleteItem(index) },
      ],
      { cancelable: false }
    );
  };

  const deleteItem = async (itemIndex) => {
    await dispatch({
      type: "DELETE_ITEM",
      listIndex,
      itemIndex,
    });
  };

  const renderItem = ({ item, index }) => {
    const { name, quantity } = item;

    return (
      <ItemView
        name={name}
        quantity={quantity}
        onRemovePress={() => showAlert(index)}
      />
    );
  };

  const emptyItem = () => {
    return <EmptyView icon="shopping" text="você ainda não tem itens" />;
  };

  const FooterCompononet = () => {
    const total = items.reduce(function (prev, current) {
      return Number(prev) + Number(current.quantity);
    }, 0);

    return (
      <Footer>
        <FooterText>
          {total === 0 ? "" : `${total} ${total > 1 ? "itens" : "item"}`}
        </FooterText>
      </Footer>
    );
  };

  return (
    <Container>
      <Box>
        <Input
          width="55%"
          name="name"
          label="nome do item"
          autoCapitalize="none"
          autoCorrect
          error={error.name}
          value={data.name}
          changeValue={inputValue}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <Input
          width="40%"
          name="quantity"
          label="quantidade"
          autoCapitalize="none"
          autoCorrect
          keyboardType="number-pad"
          submit={() => addItem()}
          error={error.quantity}
          autoFocus={false}
          value={data.quantity}
          changeValue={inputValue}
          returnKeyType="done"
          blurOnSubmit={false}
        />
      </Box>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        data={items}
        ListEmptyComponent={emptyItem}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
      />
      <FooterCompononet />
      {keyboardShow && (
        <FloatingButton onPress={() => addItem()} iconName="check" />
      )}
    </Container>
  );
}

ListDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
    setOptions: PropTypes.func,
  }),
  route: PropTypes.shape({
    params: PropTypes.shape({
      listIndex: PropTypes.number,
    }),
  }),
};

ListDetail.defaultProps = {
  navigation: {},
  route: {},
};
