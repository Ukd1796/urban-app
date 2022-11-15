import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
      'pk.eyJ1IjoidWtkMTc5NiIsImEiOiJjbGE3M24wNnQwN25uM3BvYnU1aDF4cWRoIn0.ocJjsehMX8dzLbcEBVRHjg'
});
//'pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw'

const MapComponent = (props) => {
  return (
    <Map
      antialias={true}
      containerStyle={{
        height: '110vh',
        width: '100vw',
        position: 'absolute',
        right: '0'
      }}
      center={[72.877426, 19.07609]}
      flyToOptions={{
        speed: 0
      }}
      onClick={props.mapClick}
      onStyleLoad={props.mapLoad}
      pitch = {[60]}
      style="mapbox://styles/ukd1796/cla9fozq1000c15m2eb4s58ch"
      // style="mapbox://styles/mapbox/light-v10"
      zoom = {[15]}
      bearing={[-20.6]}
    >
    </Map>
  );
}

export default MapComponent;
