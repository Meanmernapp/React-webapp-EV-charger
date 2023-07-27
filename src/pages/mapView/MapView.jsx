import React from 'react';
import { GoogleMap, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';

const mapLibraries = ['places', 'geometry', 'drawing']
const MapView = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    // id: 'google-map-script',
    googleMapsApiKey: '',
    mapLibraries
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100vh', // Adjust the height as needed
  };
  // const mapOptions ={
  //   disableDefaultUI: true,
  //   zoomControl: true,
  //   Fullscreen:true
    

  // }

  const center = {
    lat: 37.7749, // Latitude of the map center
    lng: -122.4194, // Longitude of the map center
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  const overlayViewPosition = { lat: center.lat, lng: center.lng }; // Position the overlay at the center of the map

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10} // Initial zoom level
      center={center}
      // options={mapOptions}
      
    >
      {/* Add any additional components, markers, or overlays here */}
    </GoogleMap>
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default MapView;
