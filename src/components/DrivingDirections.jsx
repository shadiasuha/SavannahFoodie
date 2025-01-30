//Review the AI-generated code below for this component to consider using your created version of it in your app.

//  import React, { useState, useEffect, useRef } from 'react';
// import { GoogleMap, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

// const Directions = ({ origin, destination }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-maps-script',
//     googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
//   });

//   const [directionsResponse, setDirectionsResponse] = useState(null);

//   const directionsCallback = (response) => {
//     if (response !== null) {
//       setDirectionsResponse(response);
//     }
//   };

//   useEffect(() => {
//     if (isLoaded && origin && destination) {
//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: origin,
//           destination: destination,
//           travelMode: window.google.maps.TravelMode.DRIVING
//         },
//         directionsCallback
//       );
//     }
//   }, [origin, destination, isLoaded]);

//   return (
//     <div>
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={{ height: '400px', width: '100%' }}
//           center={origin}
//           zoom={10}
//         >
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default Directions;
