import { GoogleMap, useJsApiLoader, MarkerF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import EvChargerModal from './component/EvChargerModal';
import navigationIcon from '../../assets/common/Transport.svg'
import selectedNowIcon from '../../assets/common/SelectedNoIcon.svg'
import selectedYesIcon from '../../assets/common/SelectedYes.svg'

import selectedNoEpackIcon from '../../assets/common/SelectedNoEpack.svg'
import selectedYesEpackIcon from '../../assets/common/SelectedYesEpack.svg'

import TransportIcon from '../../assets/common/TransportNoSelected.svg'
import TransportSelectedIcon from '../../assets/common/Transport.svg'

import EsourceIcon from '../../assets/common/EsourceIcon.svg'
import EsouceSelectedIcon from '../../assets/common/EsouceSelectedIcon.svg'

import EpackModal from './component/EpackModal';
import TransportModal from './component/TransportModal';
import EsourceModal from './component/EsourceModal';
import { Box } from '@mui/material';
import OverHeatingAlert from './component/OverHeatingAlert';
import overHeatIcon from '../../assets/map-view/alertExclamation.svg'
import { useDispatch } from 'react-redux';
import { setSidebar } from '../../services/ui/UISlice';

const mapLibraries = ['places', 'geometry', 'drawing']
const MapView = () => {
  const [map, setMap] = useState(null);
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [driverLocation,setDriverLocation] = useState({ lat: 51.2676273233324, lng: 9.51805495098651 })
  const [selectedMarker, setSelectedMarker] = React.useState(false);
  const [selectedMarkerEpack, setSelectedMarkerEpack] = React.useState(false);
  const [selectedMarkerTransport, setSelectedMarkerTransport] = React.useState(false);
  const [selectedEsourceMarker, setSelectedEsourceMarker] = React.useState(false);
  const dispatch = useDispatch()
  const driverLocationArray = [
    {
      lat: 51.37069357409834,
      lng: 9.634314001124613
    },
    {
      lat: 51.350177773208394,
      lng: 9.604617395926295
    },
    {
      lat: 51.33162673854677,
      lng: 9.579975532038329
    },
    {
      lat: 51.30398361812886,
      lng: 9.560388409460716
    },
    {
      lat: 51.28738974957312,
      lng: 9.550278926840011
    },
    {
      lat: 51.26762732333242,
      lng: 9.518054950986519
    },
    {
      lat: 51.26090616169198,
      lng: 9.513000209676168
    },
    {
      lat: 51.26090616169198,
      lng: 9.47572149251232
    },
    {
      lat: 51.271185187474686,
      lng: 9.416328282115687
    },
    {
      lat: 51.29568743357473,
      lng: 9.346193746434555
    },
    {
      lat: 51.31030351427441,
      lng: 9.296278175994829
    },
    {
      lat: 51.320176609661594,
      lng: 9.282377637391363
    },
    {
      lat: 51.31148839790838,
      lng: 9.253944717520632
    },
    {
      lat: 51.30042829406241,
      lng: 9.234357594943019
    },
    {
      lat: 51.30240350809864,
      lng: 9.219193371011963
    },
    {
      lat: 51.29371193053466,
      lng: 9.187601237822264
    },
    {
      lat: 51.28620424373478,
      lng: 9.191392293805029
    },
    {
      lat: 51.27474277615568,
      lng: 9.195183349787792
    },
    {
      lat: 51.26960394853059,
      lng: 9.18696939515847
    },
    {
      lat: 51.24587883446364,
      lng: 9.163591216598093
    },
    {
      lat: 51.22451576228797,
      lng: 9.122521443451484
    },
    {
      lat: 51.22429921411631,
      lng: 9.100393943933074
    },
    {
      lat: 51.233212291930116,
      lng: 9.073165004081842
    },
    {
      lat: 51.243285866469925,
      lng: 9.061407052782446
    }
  ];
  

  // this is just for demo later base on api all usestate related to battery will 
  // be change

  const [evChargerMarkers, setEvChargerMarker] = useState([
    {
      id: 1,
      type: 0,
     
      location: { lat: 51.3706935740983, lng: 9.63431400112461 }

    }

  ])
  const [ePackMarkers, setEPackMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 51.3736654608562, lng: 9.624967022286952 }

    }

  ])
  const [transport, setTransport] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 51.2676273233324, lng: 9.51805495098651 }

    }


  ])

  const [eSouceMarker, setEsourceMarker] = useState([
    {
      id: 1,
      type: 0,
      location: { lat: 51.2432858664699, lng: 9.06140705278244}

    }

  ])

  const [overHeat, setOverHeat] = useState(false)
  // loarder for map
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
    mapLibraries
  });

  // map container
  const mapContainerStyle = {
    width: '100%',
    height: '100vh', // Adjust the height as needed
  };
  // map options 
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    Fullscreen: true
  }
  // map location 
  const origin = {
    lat: 51.2432858664699, lng: 9.06140705278244
  };

  const destination = { lat: 51.3706935740983, lng: 9.63431400112461 }
  const center = {
    lat: (origin.lat + destination.lat) / 2,
    lng: (origin.lng + destination.lng) / 2,
  };

  const directionsCallback = (response) => {
    // Handle directions response and update state to display the route
 
    if (response !== null && response.status === 'OK') {
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setDirections(response);
      directionsRenderer.setMap(map); // Assuming 'map' is your GoogleMap instance
    
    } else {
      console.error('Error getting directions:', response);
    }
  };

  // later we use
  // const simulateDriverMovement = () => {
  //   let step = 0; // Current step along the route
  //   const totalSteps = driverLocationArray.length; // Array of driver's locations
  
  //   console.log("Starting simulation...");
  
  //   // Use a timer to update the driver's marker position
  //   const interval = setInterval(() => {
  //     console.log(`Step ${step + 1} of ${totalSteps}`);
      
  //     if (step < totalSteps) {
  //       const newDriverLocation = driverLocationArray[step];
  //       console.log("Updating driver's location:", newDriverLocation);
  //       setDriverLocation(newDriverLocation); // Update driver's marker position
  //       step++;
  //     } else {
  //       console.log("Simulation completed.");
  //       clearInterval(interval); // Stop the simulation when the route is completed
  //     }
  //   }, 1000); // Adjust the interval based on your needs
  // };

  // if map has some error
  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }


  useEffect(() => {
    if (!simulationStarted) {
      // simulateDriverMovement();
      setSimulationStarted(true); 
    }
  }, [simulationStarted]);
  useEffect(()=>{
    dispatch(setSidebar(null))
    },[])
  // render map
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={mapOptions}
      onLoad={(map) => {
        // The "map" argument is the Google Map object
        // You can now access and use the "map" object as needed
        // You can store the "map" object in a state variable if needed
        setMap(map);
      }}

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
              setSelectedEsourceMarker(false)

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
              setSelectedEsourceMarker(false)

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

            <MarkerF key={item?.id} position={driverLocation} onClick={() => {
              // handleMarkerClick("Marker")
              setSelectedMarkerTransport(!selectedMarkerTransport)
              setSelectedMarker(false)
              setSelectedMarkerEpack(false)
              setSelectedEsourceMarker(false)

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
      {
        eSouceMarker?.map(item => {
          return (

            <MarkerF key={item?.id} position={item.location}  onClick={() => {
              // handleMarkerClick("Marker")
              setSelectedEsourceMarker(!selectedEsourceMarker)
              setSelectedMarker(false)
              setSelectedMarkerEpack(false)
              setSelectedMarkerTransport(false)

            }}
              options={{ icon: selectedEsourceMarker ? EsouceSelectedIcon : EsourceIcon }}
            >
              {
                selectedEsourceMarker && (
                  <EsourceModal />
                )
              }
            </MarkerF>
          )
        }
        )
      }

      <DirectionsService
    
        options={{
          destination,
          origin,
          travelMode: 'DRIVING',
          
          
           

        }}
        callback={directionsCallback}
      />

      {
        overHeat &&
        <OverHeatingAlert icon={overHeatIcon} color={""} />
      }


    </GoogleMap>
  ) : (
    <Box>Loading Google Maps...</Box>
  );
};

export default MapView;
