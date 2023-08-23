import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import AuthenticatioauthennSlice from "./authetication/AutheticationSlice";
import SharedSlice from "./shared/SharedSlice";
import ChargingStationSlice from "./chargingStation/ChargingStationSlice";

const reducers = combineReducers({
  AuthenticatioauthennSlice,
  SharedSlice,
  ChargingStationSlice
 
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthenticatioauthennSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
