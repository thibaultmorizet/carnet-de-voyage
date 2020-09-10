import React from 'react';
import {
  Map, TileLayer,
} from 'react-leaflet';
// import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';
import './styles.scss';

const MapElement = () => {
  const prov = OpenStreetMapProvider();
  const GeoSearchControlElement = SearchControl;
  const essai = (evt) => {
    console.log('salut', evt.target);
  };
  return (
    <div>
      <p className="littleMapTitle">Ajouter une localisation :</p>
      <Map className="map" center={[48.858884469956905, 2.346941100000031]} zoom={12} onClick={essai}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoSearchControlElement
          provider={prov}
          showMarker
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom
          autoClose={false}
          searchLabel="Entrer une adresse"
          keepResult
        />
      </Map>
    </div>

  );
};
export default MapElement;
