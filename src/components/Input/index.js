import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import {
  ErrorLabelStyled,
  InputTextBoxStyled,
  InputTextStyled,
  LabelStyled,
} from "./styles";

export default function Input({
  label,
  value,
  name,
  textType,
  keyboardType,
  changeValue,
  error,
  autoCapitalize,
  submit,
  maxLength,
  autoFocus,
  autoCorrect,
  width,
  returnKeyType,
  blurOnSubmit,
}) {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [labelAnimation] = useState(new Animated.Value(0));

  // get input value
  useEffect(() => {
    setInputValue(value);
    changeValue({
      [name]: value,
    });
  }, [value]);

  // listen to focused variable
  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
    }).start();
  }, [focused]);

  // label animation
  const labelStyle = {
    opacity: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    }),
    padding: 10,
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    marginTop: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [2, -35],
    }),
  };

  // set focus to input
  useEffect(() => {
    if (inputValue !== "") {
      setFocused(true);
    }
  }, []);

  // focus validation
  const onInputFocus = () => {
    setFocused(true);
  };
  const onInputBlur = () => {
    if (inputValue === "") {
      setFocused(false);
    }
  };

  return (
    <>
      <InputTextBoxStyled width={width} error={error !== ""}>
        <LabelStyled style={labelStyle}>{label}</LabelStyled>
        <InputTextStyled
          name={name}
          textContentType={textType}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          onChangeText={(text) => {
            setInputValue(text);
            changeValue({ [name]: text });
          }}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          autoFocus={autoFocus}
          autoCorrect={autoCorrect}
          value={inputValue}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          onSubmitEditing={() => {
            submit();
          }}
          blurOnSubmit={blurOnSubmit}
        />
        {error !== "" && <ErrorLabelStyled>{error}</ErrorLabelStyled>}
      </InputTextBoxStyled>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  textType: PropTypes.string,
  keyboardType: PropTypes.string,
  changeValue: PropTypes.func,
  error: PropTypes.string,
  autoCapitalize: PropTypes.string,
  maxLength: PropTypes.number,
  submit: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  width: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
};

Input.defaultProps = {
  value: "",
  textType: "none",
  keyboardType: "default",
  changeValue: () => {},
  error: "",
  autoCapitalize: "sentences",
  maxLength: 99999,
  submit: () => {},
  autoFocus: true,
  autoCorrect: false,
  width: "",
  blurOnSubmit: true,
};
