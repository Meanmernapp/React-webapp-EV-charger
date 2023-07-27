import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderLayout from "../layout/HeaderLayout";
import ForgetPassword from "../pages/login/ForgetPassword";
import ChargingStation from "../pages/chargingStation/ChargingStation";
import Login from "../pages/login/Login";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useSelector } from "react-redux";
import MapViewLayout from "../pages/mapView/MapViewLayout";

// Lazy load the components
// const ChargingStation = lazy(() => import("../pages/chargingStation/ChargingStation"));
// const Login = lazy(() => import("../pages/login/Login"));

const Routing = () => {
 
  return (
    <Routes>
      {/* This route should be used as a protected route when needed */}

      <Route element={<HeaderLayout />}>
        <Route index path="/map-view" element={<MapViewLayout/>} />
        <Route path="actual-status" element={"status"} />
        <Route path="ev-charger" element={<ChargingStation />} />
        <Route path="statistics" element={"statistics"} />
        <Route path="operations" element={"operation"} />
      </Route>
      <Route index path="/" element={
        <GoogleReCaptchaProvider reCaptchaKey="6LdxUjgnAAAAAK8Hy1i3a94ULzsPIglW8KTEaNzy">
          <Login />
        </GoogleReCaptchaProvider>
      } />
      <Route path="/forget-password" element={<ForgetPassword />} />
      {/* <Route path="/*" element={<NotFoundPage />} />
      <Route path="/unauthorized" element={<>unauthorized</>} />
      <Route path="/forbidden" element={<>forbidden</>} /> */}
    </Routes>
  );
};

export default Routing;
