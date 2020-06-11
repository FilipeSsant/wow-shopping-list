// pages
import AddList from "@pages/AddList";
import Home from "@pages/Home";
import ListDetail from "@pages/ListDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
// themes
import darkTheme from "../theme/dark";
import lightTheme from "../theme/light";
import { navigatorOptions } from "./config";

export default function Routes() {
  const Stack = createStackNavigator();
  // redux variables
  const conf = useSelector((state) => state.conf);

  return (
    <ThemeProvider theme={conf.darkModeOn ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={conf.darkModeOn ? "light-content" : "dark-content"}
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...navigatorOptions,
            headerStyle: {
              ...navigatorOptions.headerStyle,
              backgroundColor: conf.darkModeOn
                ? darkTheme.background
                : lightTheme.background,
            },
            headerTintColor: conf.darkModeOn
              ? darkTheme.defaultText
              : lightTheme.defaultText,
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "minhas listas" }}
            component={Home}
          />
          <Stack.Screen
            name="AddList"
            options={{ title: "adicionar lista" }}
            component={AddList}
          />
          <Stack.Screen name="ListDetail" component={ListDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
