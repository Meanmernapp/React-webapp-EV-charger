import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActualStatusDetails from "./ActualStatusDetails";
import { ActualStatusEpack } from "./actualStatusEpack/ActualStatusEpack";
import { ESourceDetailSideBar } from "../../components/ESourceDetailSideBar";
import { useDispatch } from "react-redux";
import { setSidebar } from "../../services/ui/UISlice";
import { EVChargerDetail } from "./actualStatusEV/EVChargerDetail";
import battery from "../../assets/Icons/battery.svg";
import dischBattery from "../../assets/Icons/dischBattery.svg";
import layer from "../../assets/Icons/layer.svg";
import stat from "../../assets/Icons/stat.svg";
import time from "../../assets/Icons/time.svg";
import layerUp from "../../assets/Icons/layerUp.svg";
import layerDown from "../../assets/Icons/layerDown.svg";
import grayCar from "../../assets/Icons/grayCar.svg";
import grayFrame from "../../assets/Icons/grayFrame.svg";

const esource = [
  {
    topHeading: "Capacity Peak",
    mainHeading: "2,5MWH",
    icon: stat,
  },
  {
    topHeading: "Purchase Price",
    mainHeading: "0,10€/kWh",
    icon: layer,
  },

  {
    topHeading: "Average Charging  Time",
    mainHeading: "120min.",
    icon: time,
    subHeading: "*per E-Pack",
  },
  {
    topHeading: "Average Energy ",
    mainHeading: "300kWh.",
    icon: battery,
    subHeading: "*ChargedPer Day",
  },
];
const epack = [
  {
    topHeading: "Selling Price",
    mainHeading: "0,50€/kWh",
    icon: layer,
  },
  {
    topHeading: "Purchase Price",
    mainHeading: "0,12€/kWh",
    icon: layer,
  },
  {
    topHeading: "Average ReCharging  Time",
    mainHeading: "120min.",
    icon: layerUp,
  },
  {
    topHeading: "Average Discharging  Time",
    mainHeading: "360min.",
    icon: layerDown,
  },
  {
    topHeading: "Average Discharged per Day ",
    mainHeading: "600kWh.",
    icon: dischBattery,
  },
  {
    topHeading: "Average Charged per Day ",
    mainHeading: "600kWh.",
    icon: dischBattery,
  },
];
const echarger = [
  {
    topHeading: "E-Pack Capacity",
    mainHeading: "300kWh",
    icon: grayFrame,
    subHeading: "For a certain power",
  },
  {
    topHeading: "Selling Price",
    mainHeading: "0,50€/kWh",
    icon: layer,
  },

  {
    topHeading: "Average Charging  Time",
    mainHeading: "25min.",
    icon: time,
    subHeading: "*per Vehicle",
  },
  {
    topHeading: "Average Car  Connections",
    mainHeading: "16.",
    icon: grayCar,
    subHeading: "*Per 24hs",
  },
  {
    topHeading: "Average Energy ",
    mainHeading: "300kWh.",
    icon: battery,
    subHeading: "*Per Day",
  },
];
export default function ActualStatusLayout() {
  const [page, setPage] = useState(null);
  const { pageName } = useParams();
  const dispatch = useDispatch();
  // the switch statement is to render different pages and sidebar depending on route
  const selectPage = () => {
    switch (pageName) {
      case "esource":
        setPage(<ActualStatusDetails />);
        dispatch(setSidebar(<ESourceDetailSideBar data={esource} />));
        break;
      case "epack":
        setPage(<ActualStatusEpack />);
        dispatch(setSidebar(<ESourceDetailSideBar data={epack} />));
        break;
      case "echarger":
        setPage(<EVChargerDetail />);
        dispatch(setSidebar(<ESourceDetailSideBar data={echarger} />));
        break;
      default:
        setPage(null);
        dispatch(setSidebar(null));
        break;
    }
  };

  useEffect(() => {
    if (
      pageName === "esource" ||
      pageName === "epack" ||
      pageName === "echarger"
    ) {
      selectPage();
    } else {
      setPage(null);
      dispatch(setSidebar(null));
      return;
    }
  }, [pageName]);
  return <>{page}</>;
}
