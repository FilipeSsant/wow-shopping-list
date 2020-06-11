// redux
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
// use localStorage from navigator
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
