import { FloatingButton, Input } from "@components";
import { Container } from "@styles/components";
import validate from "@utils/validator";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "./styles";

export default function AddList({ navigation }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // redux
  const dispatch = useDispatch();
  const conf = useSelector((state) => state.conf);

  const inputValue = async (value) => {
    await setName(value.name);
  };

  const addList = async () => {
    setError("");

    const nameValidatorError = validate(name, "required");

    if (nameValidatorError) {
      return setError(nameValidatorError);
    }

    await dispatch({ type: "ADD_LIST", list: { name, items: [] } });
    await navigation.goBack();
  };

  return (
    <Container
      style={{ alignItems: "center" }}
      backgroundColor={conf.modeColor.default}
    >
      <Box>
        <Input
          name="name"
          label="nome da lista"
          autoCapitalize="none"
          error={error}
          autoCorrect
          value={name}
          changeValue={inputValue}
          submit={() => addList()}
          returnKeyType="next"
          blurOnSubmit
        />
      </Box>
      <FloatingButton onPress={() => addList()} iconName="check" />
    </Container>
  );
}
