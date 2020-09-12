import React, { useEffect } from 'react';
import * as GeoSearch from 'leaflet-geosearch';
import './styles.scss';
import L from 'leaflet';

const MapElement = ({ onChange }) => {
  const yourEventHandler = (evt) => {
    const result = evt.location;
    const lat = result.y;
    const lng = result.x;
    onChange(lat, 'latitude');
    onChange(lng, 'longitude');
  };
  const generateMap = () => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    const marker = L.marker([51.505, -0.09]).addTo(map);

    console.log(map);
    const provider = new GeoSearch.OpenStreetMapProvider();

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

    const search = new GeoSearch.GeoSearchControl({
      provider,
      searchLabel: 'Localisation',
      autoClose: true,
      showMarker: true,
      showPopup: true,
      keepResult: true,
      marker: {
        icon: new L.Icon.Default(),
        draggable: false,
      },
    });
    map.addControl(search);
    map.on('geosearch/showlocation', yourEventHandler);
  };

  useEffect(() => {
    generateMap();
  }, []);

  return (
    <div id="map" />
  );
};
export default MapElement;
