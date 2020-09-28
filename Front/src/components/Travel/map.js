import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import './styles.scss';

const Map = ({ step, onClickStep }) => {
  let AllImages = [];
  const AddStep = [];

  const onClick = (evt) => {
    const target = evt.target.options.icon.options.className;
    const result = step.filter((elt) => elt.id === target);
    const {
      title, stepLike, id, description, pictures, comments,
    } = result[0];
    pictures.map((image) => {
      const currentImg = {
        url: image.id,
        data: `http://34.239.44.174/uploads/pictures/${image.url}`,
      };
      AllImages.push(currentImg);
    });
    onClickStep(title, AllImages, stepLike, id, description, comments);
    const likeelement = document.querySelector('.press');
    const likeSpanElement = document.querySelector('.likeIcon__span');
    if (likeelement) {
      likeelement.classList.remove('press');
      likeSpanElement.classList.remove('press');
    }

    const divElement = document.querySelector('.travelPage__content');
    divElement.style.display = 'block';
  };

  const onClose = () => {
    const divElement = document.querySelector('.travelPage__content');
    divElement.style.display = 'none';
    onClickStep('', null, 0, '', '', []);
    const imageDiv = document.querySelector('.stepImages');
    imageDiv.remove();
    AllImages = [];
  };

  const addPhotoStep = (map) => {
    step.map((elt) => {
      const currentImg = [];

      for (let i = 0; i < elt.pictures.length; i++) {
        const currentEssai = {
          url: elt.pictures[i].id,
          data: `http://34.239.44.174/uploads/pictures/${elt.pictures[i].url}`,
        };
        currentImg.push(currentEssai);
      }
      const customPopup = `<img class='map__picture' src=${currentImg[0].data} alt='maptime logo gif' width='150px'/> <br/>`;
      const myIcon = L.icon({
        iconUrl: currentImg[0].data,
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
    const mymap = L.map('travelPage__map').setView([48.873126, 2.316808], 2);
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

Map.propTypes = {
  step: PropTypes.array.isRequired,
  onClickStep: PropTypes.func.isRequired,
};

export default Map;
