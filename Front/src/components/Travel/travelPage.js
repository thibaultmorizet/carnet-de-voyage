import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import L from 'leaflet';
import './styles.scss';

const TravelPage = () => {
  const generateMap = () => {
    const mymap = L.map('travelPage__map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(mymap);
    const customOptions = {
      maxWidth: '400',
      width: '200',
      color: 'blue',
      className: 'popupCustom',
    };
    const customPopup = "<img class='map__picture' src='https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='maptime logo gif' width='150px'/> <b>My office</b><br/>";

    const myIcon = L.icon({
      // className: 'my-div-icon',
      // iconSize: [60, 60],
      iconUrl: 'https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      shadowUrl: 'https://www.quevilly-habitat.fr/wp-content/uploads/2019/01/carr%C3%A9-blanc-300x300.png',
      iconSize: [55, 55],
      iconAnchor: [22, 94],
      popupAnchor: [0, -76],

      shadowSize: [70, 70],
      shadowAnchor: [30, 101],
    });

    const littleton = L.marker([39.61, -105.02], { icon: myIcon }).bindPopup(customPopup, customOptions).addTo(mymap);
    const denver = L.marker([39.74, -104.99], { icon: myIcon }).bindPopup(customPopup, customOptions).addTo(mymap);
    const aurora = L.marker([39.73, -104.8], { icon: myIcon }).bindPopup(customPopup, customOptions).addTo(mymap);
    const golden = L.marker([39.77, -105.23], { icon: myIcon }).bindPopup(customPopup, customOptions).addTo(mymap);
    const group = new L.featureGroup([littleton, denver, aurora, golden]);

    mymap.fitBounds(group.getBounds());
  };

  useEffect(() => {
    generateMap();
  }, []);

  return (
    <div className="travelPage">
      <div className="travelPage__header">
        <h2 className="travelPage__header--title">Voyage au pérou</h2>
        <FontAwesomeIcon className="travelPage__header--icon" icon={faPen} />
        <button type="button" className="travelPage__header--follow">Suivre</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi obcaecati beatae pariatur
          quis earum quaerat. Nemo cupiditate mollitia, molestias vero saepe labore distinctio quam.
          Quam fugiat quisquam amet error placeat.
        </p>
      </div>
      <div id="travelPage__map">
        d
      </div>
    </div>
  );
};

export default TravelPage;
