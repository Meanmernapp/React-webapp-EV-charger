import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import AuthenticationSlice from "./authetication/AutheticationSlice";
import SharedSlice from "./shared/SharedSlice";
import ChargingStationSlice from "./chargingStation/ChargingStationSlice";
import UiSlice from "./ui/UISlice";
import AddDevice from "./addDevice/AddDeviceSlice";
import LocationSlice from "./location/LocationSlice";
import NotificationSlice from "./notification/NotificationSlice";
import DriverSlice from "./driver/DriverSlice";
import DriversSlice from "./drivers/DriversSlice";
import OperationsSlice from "./operations/OperationsSlice";
import GenralDataSlice from "./genralData/GenralDataSlice";
import EpackEsourceSlice from "./epackEsource/EpackEsourceSlice";
const reducers = combineReducers({
  AuthenticationSlice,
  SharedSlice,
  ChargingStationSlice,
  UiSlice,
  AddDevice,
  LocationSlice,
  NotificationSlice,
  DriverSlice,
  DriversSlice,
  GenralDataSlice,
  OperationsSlice,
  EpackEsourceSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
