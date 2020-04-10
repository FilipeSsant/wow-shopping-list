import {
  ColorModeButton,
  EmptyView,
  FloatingButton,
  ItemView,
} from "@components";
import { Container } from "@styles/components";
import PropTypes from "prop-types";
import React from "react";
import { Alert, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ navigation }) {
  //redux
  const lists = useSelector((state) => state.lists);
  const conf = useSelector((state) => state.conf);
  const dispatch = useDispatch();

  const itemClick = async (listIndex) => {
    await navigation.navigate("ListDetail", { listIndex });
  };

  const changeConfMode = () => {
    dispatch({ type: "CHANGE_MODE", darkModeOn: !conf.darkModeOn });
  };

  const colorModeProps = {
    iconName: conf.darkModeOn ? "weather-sunny" : "weather-night",
  };

  const showAlert = (index) => {
    Alert.alert(
      "deseja mesmo excluir esta lista?",
      "esta operação não poderá ser desfeita",
      [
        {
          text: "não",
          style: "cancel",
        },
        { text: "sim", onPress: () => deleteList(index) },
      ],
      { cancelable: false }
    );
  };

  const deleteList = async (listIndex) => {
    await dispatch({
      type: "DELETE_LIST",
      listIndex,
    });
  };

  const renderItem = ({ item, index }) => {
    const { name } = item;

    return (
      <ItemView
        name={name}
        onPress={() => itemClick(index)}
        onRemovePress={() => showAlert(index)}
      />
    );
  };

  const emptyItem = () => {
    return (
      <EmptyView icon="format-list-bulleted" text="você ainda não tem listas" />
    );
  };

  return (
    <>
      <Container>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          data={lists}
          ListEmptyComponent={emptyItem}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderItem}
        />
        <FloatingButton
          onPress={() => {
            navigation.navigate("AddList");
          }}
          iconName="add"
        />
        <ColorModeButton {...colorModeProps} onPress={() => changeConfMode()} />
      </Container>
    </>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Home.defaultProps = {
  navigation: {},
};
