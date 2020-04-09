import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/routes";
//redux
import store from "./src/store";

import("./ReactotronConfig").then(() => {
  console.log("Reactotron Configured");
});

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
