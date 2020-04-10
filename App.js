import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/routes";
// redux
import store from "./src/store";

import("./ReactotronConfig").then(() => {
  console.log("Reactotron Configured");
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
