import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";
import EvChargerModal from "../../mapView/component/EvChargerModal";
import selectedNowIcon from "../../../assets/common/SelectedNoIcon.svg";
import selectedYesIcon from "../../../assets/common/SelectedYes.svg";
import selectedNoEpackIcon from "../../../assets/common/SelectedNoEpack.svg";
import selectedYesEpackIcon from "../../../assets/common/SelectedYesEpack.svg";
import TransportIcon from "../../../assets/common/TransportNoSelected.svg";
import TransportSelectedIcon from "../../../assets/common/Transport.svg";
import EsourceIcon from "../../../assets/common/EsourceIcon.svg";
import EsouceSelectedIcon from "../../../assets/common/EsouceSelectedIcon.svg";
import EpackModal from "../../mapView/component/EpackModal";
import TransportModal from "../../mapView/component/TransportModal";
import EsourceModal from "../../mapView/component/EsourceModal";
import { Stack, Typography } from "@mui/material";
import { LocationFooter } from "../actualStatusEpack/components/LocationFooter";

const mapLibraries = ["places", "geometry", "drawing"];
export const LocationView = ({ icon, location, text, max }) => {
  const [selectedMarker, setSelectedMarker] = React.useState(false);
  const [selectedMarkerEpack, setSelectedMarkerEpack] = React.useState(false);
  const [selectedMarkerTransport, setSelectedMarkerTransport] =
    React.useState(false);
  const [selectedEsourceMarker, setSelectedEsourceMarker] =
    React.useState(false);

  const [evChargerMarkers, setEvChargerMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.7668, lng: -122.46 },
    },
  ]);
  const [ePackMarkers, setEPackMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.8865, lng: -122.4 },
    },
  ]);
  const [transport, setTransport] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.865, lng: -122.46 },
    },
  ]);

  const [eSouceMarker, setEsourceMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.799, lng: -122.35 },
    },
  ]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    mapLibraries,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "150px", // Adjust the height as needed
  };
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    Fullscreen: false,
  };

  const center = {
    lat: 37.7749, // Latitude of the map center
    lng: -122.4194, // Longitude of the map center
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }
  return (
    <Stack mb={1} sx={{ border: "1px solid #7a7a7a", width: "100%" }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        maxHeight={max ? max : "150px"}
        width={"100%"}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            // options={mapOptions}
          >
            {/* Add any additional components, markers, or overlays here */}
            {evChargerMarkers.map((item) => {
              return (
                <MarkerF
                  key={item?.id}
                  position={item.location}
                  onClick={() => {
                    // handleMarkerClick("Marker")
                    setSelectedMarker(!selectedMarker);
                    setSelectedMarkerEpack(false);
                    setSelectedMarkerTransport(false);
                    setSelectedEsourceMarker(false);
                  }}
                  options={{
                    icon: selectedMarker ? selectedYesIcon : selectedNowIcon,
                  }}
                >
                  {selectedMarker && <EvChargerModal />}
                </MarkerF>
              );
            })}
            {ePackMarkers?.map((item) => {
              return (
                <MarkerF
                  key={item?.id}
                  position={item.location}
                  onClick={() => {
                    // handleMarkerClick("Marker")
                    setSelectedMarkerEpack(!selectedMarkerEpack);
                    setSelectedMarker(false);
                    setSelectedMarkerTransport(false);
                    setSelectedEsourceMarker(false);
                  }}
                  options={{
                    icon: selectedMarkerEpack
                      ? selectedYesEpackIcon
                      : selectedNoEpackIcon,
                  }}
                >
                  {selectedMarkerEpack && <EpackModal />}
                </MarkerF>
              );
            })}

            {transport?.map((item) => {
              return (
                <MarkerF
                  key={item?.id}
                  position={item.location}
                  onClick={() => {
                    // handleMarkerClick("Marker")
                    setSelectedMarkerTransport(!selectedMarkerTransport);
                    setSelectedMarker(false);
                    setSelectedMarkerEpack(false);
                    setSelectedEsourceMarker(false);
                  }}
                  options={{
                    icon: selectedMarkerTransport
                      ? TransportSelectedIcon
                      : TransportIcon,
                  }}
                >
                  {selectedMarkerTransport && <TransportModal />}
                </MarkerF>
              );
            })}

            {eSouceMarker?.map((item) => {
              return (
                <MarkerF
                  key={item?.id}
                  position={item.location}
                  onClick={() => {
                    // handleMarkerClick("Marker")
                    setSelectedEsourceMarker(!selectedEsourceMarker);
                    setSelectedMarker(false);
                    setSelectedMarkerEpack(false);
                    setSelectedMarkerTransport(false);
                  }}
                  options={{
                    icon: selectedEsourceMarker
                      ? EsouceSelectedIcon
                      : EsourceIcon,
                  }}
                >
                  {selectedEsourceMarker && <EsourceModal />}
                </MarkerF>
              );
            })}
          </GoogleMap>
        ) : (
          <div>Loading Google Maps...</div>
        )}
      </Stack>
      {icon && location && text && (
        <LocationFooter icon={icon} location={location} text={text} />
      )}
    </Stack>
  );
};
