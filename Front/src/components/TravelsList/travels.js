/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ImageUploader from 'react-images-upload';
import {
  handlePicture,
} from 'src/selectors/carnetDeVoyage';

const Container = ({
  title, description,
  picture_url,
}) => {
  const handleDescriptionChange = (evt) => {
    changeFieldTravelsList(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changeFieldTravelsList);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [title, description, picture_url];
    const isEmptyElement = allDataForRegister.includes('');
  };

  return (
    <div className="travels__container">

      <input type="submit" name="travelsInput" className="travelsInput" value="Créer un nouveau voyage" />

      <div className="travels__inProgress" onSubmit={handleSubmit}>
        <h2 className="travels__container--title"> Voyages en cours </h2>
        <FormInput
          type="text"
          name="title"
          content="Titre"
          onChange={changeFieldTravelsList}
        />
        <FormInput
          type="text"
          className="floating-input"
          name="description"
          placeholder=" "
          maxLength="255"
          rows="9"
          onChange={handleDescriptionChange}
        />
        <div className="travelList--picture">
          <ImageUploader
            withIcon
            onChange={handleChangePicture}
            imgExtension={['.jpg', '.png', '.jpeg']}
            label="Max file size: 5mb, accepted: jpeg, jpg, png"
            maxFileSize={5242880}
            withPreview
            singleImage
          />
        </div>
      </div>

      <div className="travels__finish" onSubmit={handleSubmit}>
        <h2 className="travels__container--title"> Voyages terminés </h2>
        <FormInput
          type="text"
          name="title"
          content="Titre"
          onChange={changeFieldTravelsList}
        />
        <FormInput
          type="text"
          className="floating-input"
          name="description"
          placeholder=" "
          maxLength="255"
          rows="9"
          onChange={handleDescriptionChange}
        />
        <div className="travelList--picture">
          <ImageUploader
            withIcon
            onChange={handleChangePicture}
            imgExtension={['.jpg', '.png', '.jpeg']}
            label="Max file size: 5mb, accepted: jpeg, jpg, png"
            maxFileSize={5242880}
            withPreview
            singleImage
          />
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture_url: PropTypes.array.isRequired,
};

export default Container;
