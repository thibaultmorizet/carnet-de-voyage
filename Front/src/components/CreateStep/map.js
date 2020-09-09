import React from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import './styles.scss';

const MapElement = () => (
  <Map className="map" center={[47.218372, -1.553621]} zoom={12}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </Map>
);

export default MapElement;
