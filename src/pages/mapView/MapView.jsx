import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';
import React, { useState } from 'react';
import EvChargerModal from './component/EvChargerModal';
import navigationIcon from '../../assets/common/Transport.svg'
import selectedNowIcon from '../../assets/common/SelectedNoIcon.svg'
import selectedYesIcon from '../../assets/common/SelectedYes.svg'

import selectedNoEpackIcon from '../../assets/common/SelectedNoEpack.svg'
import selectedYesEpackIcon from '../../assets/common/SelectedYesEpack.svg'

import TransportIcon from '../../assets/common/TransportNoSelected.svg'
import TransportSelectedIcon from '../../assets/common/Transport.svg'

import EpackModal from './component/EpackModal';
import TransportModal from './component/TransportModal';

const mapLibraries = ['places', 'geometry', 'drawing']
const MapView = () => {

  const [selectedMarker, setSelectedMarker] = React.useState(false);
  const [selectedMarkerEpack, setSelectedMarkerEpack] = React.useState(false);
  const [selectedMarkerTransport, setSelectedMarkerTransport] = React.useState(false);

  const [evChargerMarkers, setEvChargerMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.7668, lng: -122.4600 }

    }

  ])
  const [ePackMarkers, setEPackMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.8565, lng: -122.4600 }

    }

  ])
  const [transport, setTransport] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 37.965, lng: -122.4600 }

    }

  ])

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    mapLibraries
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100vh', // Adjust the height as needed
  };
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    Fullscreen: true
  }

  const center = {
    lat: 37.7749, // Latitude of the map center
    lng: -122.4194, // Longitude of the map center
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={mapOptions}
    >
      {/* Add any additional components, markers, or overlays here */}
      {
        evChargerMarkers.map(item => {
          return (

            <MarkerF key={item?.id} position={item.location} onClick={() => {
              // handleMarkerClick("Marker")
              setSelectedMarker(!selectedMarker)
              setSelectedMarkerEpack(false)
              setSelectedMarkerTransport(false)

            }}
              options={{ icon: selectedMarker ? selectedYesIcon : selectedNowIcon }}
            >
              {
                selectedMarker && (
                  <EvChargerModal />
                )
              }
            </MarkerF>
          )
        })
      }
      {
        ePackMarkers?.map(item => {
          return (

            <MarkerF key={item?.id} position={item.location} onClick={() => {
              // handleMarkerClick("Marker")
              setSelectedMarkerEpack(!selectedMarkerEpack)
              setSelectedMarker(false)
              setSelectedMarkerTransport(false)

            }}
              options={{ icon: selectedMarkerEpack ? selectedYesEpackIcon : selectedNoEpackIcon }}
            >
              {
                selectedMarkerEpack && (
                  <EpackModal />
                )
              }
            </MarkerF>
          )
        }
        )
      }

{
        transport?.map(item => {
          return (

            <MarkerF key={item?.id} position={item.location} onClick={() => {
              // handleMarkerClick("Marker")
              setSelectedMarkerTransport(!selectedMarkerTransport)
              setSelectedMarker(false)
              setSelectedMarkerEpack(false)

            }}
              options={{ icon: selectedMarkerTransport ? TransportSelectedIcon : TransportIcon }}
            >
              {
                selectedMarkerTransport && (
                  <TransportModal />
                )
              }
            </MarkerF>
          )
        }
        )
      }

    </GoogleMap>
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default MapView;
