import React, { useEffect } from 'react';
import L from 'leaflet';
import './styles.scss';

const Map = ({ step, onClickStep }) => {
  console.log(step);
  const AllImages = [];
  const AddStep = [];
  const description = 'Salut';

  const onClick = (evt) => {
    const target = evt.target.options.icon.options.className;
    const result = step.filter((elt) => elt.id === target);
    console.log('result', result);
    const { title } = result[0];
    onClickStep(title);
    const divElement = document.querySelector('.travelPage__content');
    divElement.style.display = 'block';
  };

  const onClose = () => {
    const divElement = document.querySelector('.travelPage__content');
    divElement.style.display = 'none';
  };

  const addPhotoStep = (map) => {
    step.map((elt) => {
      elt.pictures.map((image) => {
        const currentImg = {
          url: elt.id,
          data: `http://34.239.44.174/uploads/pictures/${image.url}`,
        };
        AllImages.push(currentImg);
      });

      const customPopup = `<img class='map__picture' src=${AllImages[0].data} alt='maptime logo gif' width='150px'/> <br/>`;
      const myIcon = L.icon({
        // className: 'my-div-icon',
        // iconSize: [60, 60],
        iconUrl: AllImages[0].data,
        shadowUrl: 'https://www.quevilly-habitat.fr/wp-content/uploads/2019/01/carr%C3%A9-blanc-300x300.png',
        iconSize: [55, 55],
        iconAnchor: [22, 94],
        popupAnchor: [0, -76],
        shadowSize: [70, 70],
        shadowAnchor: [30, 101],
        className: elt.id,
      });
      const customOptions = {
        maxWidth: '400',
        width: '200',
        color: 'blue',
        className: 'ceciestuneclasse',
      };

      const newCity = L.marker([elt.latitude, elt.longitude], { icon: myIcon }).bindPopup(customPopup, customOptions).addTo(map).on('popupopen', onClick);
      AddStep.push(newCity);
    });
  };

  const generateMap = () => {
    const mymap = L.map('travelPage__map').setView([51.505, -0.09], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(mymap);

    addPhotoStep(mymap);

    const group = new L.featureGroup(AddStep);

    mymap.fitBounds(group.getBounds()).on('popupclose', onClose);
  };

  useEffect(() => {
    generateMap();
  }, []);

  return (
    <div className="travelPage__map" />
  );
};

export default Map;
