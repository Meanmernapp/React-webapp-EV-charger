import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderLayout from "../layout/HeaderLayout";
import ForgetPassword from "../pages/login/ForgetPassword";
import ChargingStation from "../pages/chargingStation/ChargingStation";
import Login from "../pages/login/Login";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ActualStatus from "../pages/actualStatus/ActualStatus";
import SidebarLayout from "../layout/SidebarLayout";
import MapView from "../pages/mapView/MapView";
import ActualStatusLayout from "../pages/actualStatus/ActualStatusLayout";
import ConfirmEmail from "../pages/login/ConfirmEmail";
import ResetNewPassword from "../pages/login/ResetNewPassword";
import { AddDevice } from "../pages/addDevice/AddDevice";
import { SelectEpack } from "../pages/operations/selectEPack/SelectEpack";
import { SelectDriver } from "../pages/operations/selectDriver/SelectDriver";
import { MoveEPack } from "../pages/operations/moveEpack/MoveEPack";
import { Drivers } from "../pages/drivers/Drivers";
import { OperationsMain } from "../pages/operations/OperationsMain";
import SwapEpack from "../pages/drivers/SwapEpack";
import { useSelector } from "react-redux";

const Routing = () => {
  const { user } = useSelector((state) => state.AuthenticationSlice);

  return (
    <Routes>
      {/* This route should be used as a protected route when needed */}

      {/* admin route  */}
      {

        user.role === "user" || user.role === "operator" ?
          <Route element={<HeaderLayout />}>
            <Route element={<SidebarLayout />}>
              <Route index path="/map-view" element={<MapView />} />
              <Route path="actual-status" element={<ActualStatus />} />
              <Route path="actual-status/:pageName" element={<ActualStatusLayout />} />
            </Route>
            <Route path="ev-charger" element={<ChargingStation />} />
            <Route path="statistics" element={"statistics"} />
            <Route path="actual-status/add-device" element={<AddDevice />} />
            <Route path="/operations" element={<OperationsMain />} />
            <Route path="/select-epack" element={<SelectEpack />} />
            <Route path="/select-driver" element={<SelectDriver />} />
            <Route path="/move-epack" element={<MoveEPack />} />
          </Route>
          :
          <Route path="/forbidden" element={<>forbidden</>} />
      }

      {/* driver route  */}
      {
        user.role === "driver" ?
          <Route element={<HeaderLayout />}>
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/swap-epack" element={<SwapEpack />} />
          </Route>
          :
          <Route path="/forbidden" element={<>forbidden</>} />
      }

      {/* public route */}
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="/user/reset-password" element={<ResetNewPassword />} />
      <Route path="/*" element={"404"} />
      <Route path="/unauthorized" element={<>unauthorized</>} />
      <Route path="/forbidden" element={<>forbidden</>} />

      <Route
        index
        path="/"
        element={
          <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY}
          >
            <Login />
          </GoogleReCaptchaProvider>
        }
      />
    </Routes>
  );
};

export default Routing;
