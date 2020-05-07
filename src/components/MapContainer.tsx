import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapContainer extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div className="event-map-wrapper">
        <GoogleMapExample
          containerElement={ <div style={{ height: '300px', width: '100%', position: 'relative' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
      </div>
   );
   }
};
export default MapContainer;