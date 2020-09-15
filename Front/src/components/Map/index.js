import React, { useEffect } from 'react';
import * as GeoSearch from 'leaflet-geosearch';
import PropTypes from 'prop-types';
import L from 'leaflet';

// import './styles.scss';

const MapElement = ({ onChange, latitude, longitude }) => {
  const yourEventHandler = (evt) => {
    const result = evt.location;
    const lat = result.y;
    const lng = result.x;
    onChange(lat, 'latitude');
    onChange(lng, 'longitude');
  };
  const generateMap = ({ lat, lng }) => {
    const map = L.map('map').setView([lat, lng], 13);
    console.log('latitude long 2', latitude, longitude);
    const marker = L.marker([lat, lng]).addTo(map);

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
    generateMap(latitude, longitude);
  }, []);

  return (
    <div id="map" />
  );
};

MapElement.propTypes = {
  onChange: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
export default MapElement;
