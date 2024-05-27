import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const containerStyle = {
  width: '220px',
  height: '260px'
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC6qLBDh4ZKoh8B5ho-9PK-pGxHZnGzNrM"
  });

  const [map, setMap] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [center, setCenter] = useState({ lat: 31.578454, lng: 74.357424 }); // Default center

  useEffect(() => {
    // Fetch data from your API
    fetch('http://localhost:5000/latest-location')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data in state
        setApiData(data);
        
        // Update center based on fetched data
        if (data[0]) {
          
       
          setCenter({

            lat: data[0].latitude,
            lng: data[0].longitude
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      
    </div>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default React.memo(MyComponent);
