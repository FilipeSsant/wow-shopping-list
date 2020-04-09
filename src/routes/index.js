// pages
import AddList from "@pages/AddList";
import Home from "@pages/Home";
import ListDetail from "@pages/ListDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import { navigatorOptions } from "./config";

export default function Routes() {
  const Stack = createStackNavigator();

  // redux
  const conf = useSelector((state) => state.conf);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...navigatorOptions,
          headerStyle: {
            ...navigatorOptions.headerStyle,
            backgroundColor: conf.modeColor.default,
          },
          headerTintColor: conf.modeColor.defaultText,
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
  );
}
