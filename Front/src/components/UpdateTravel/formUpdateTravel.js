import React, { useEffect } from 'react';
import ImageUploader from 'react-images-upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'src/components/Spinner';
import { handlePicture } from 'src/selectors/carnetDeVoyage';
import FormInput from '../FormInput';
import './styles.scss';

const FormUpdateTravel = ({
  fetchDataForUpdateTravel, title, loading, creation_date, description, picture_url, changeDateForUpdateTravel,
}) => {
  useEffect(() => {
    fetchDataForUpdateTravel();
  }, []);

  const handleDescription = (evt) => {
    changeDateForUpdateTravel(evt.target.value, 'description');
  };

  const handleChangePicture = (evt) => {
    handlePicture(evt, changeDateForUpdateTravel);
    const imgElement = document.querySelector('.picturediv_updateTravel');
    if (imgElement) {
      imgElement.remove();
    }
  };

  const handleRemovePicture = () => {
    changeDateForUpdateTravel('', 'picture');
    const imgElement = document.querySelector('.picturediv_updateTravel');
    if (imgElement) {
      imgElement.remove();
    }
  };

  return (
    <div className="formUpdateTravel">
      {loading && (
        <Spinner />
      )}
      {!loading && (
        <div className="formTravel">
          <h2 className="createTravel__title formUpdateTravel__title">Modifier mon Voyage</h2>
          <form action="" className="formTravel__form">
            <div className="formTravel__form--firstInput">
              <FormInput
                type="text"
                name="title"
                content="Titre"
                onChange={changeDateForUpdateTravel}
                value={title}
              />
              <FormInput
                type="text"
                name="creation_date"
                content="Date (JJ/MM/AAAA)"
                onChange={changeDateForUpdateTravel}
                value={creation_date}
              />
            </div>

            <div className="floating-label formTravel__form--description">
              <textarea
                type="text"
                className="floating-input"
                name="description"
                placeholder=" "
                maxLength="255"
                rows="9"
                onChange={handleDescription}
                value={description}
              />
              <label htmlFor="description"> Description (255 caractères maximum) </label>
            </div>

            <div className="FormUpdateStep__formElt--pictures picturediv_updateTravel">
              <img className="picture_updateTravel" src={`http://34.239.44.174/uploads/pictures/${picture_url}`} alt="pictureTravel" />
              <FontAwesomeIcon icon={faTimes} className="pictures__icon" onClick={handleRemovePicture} />
            </div>

            <div className="formTravel__form--picture">
              <ImageUploader
                withIcon
                onChange={handleChangePicture}
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview
                singleImage
              />
            </div>

            <div className="formTravel__form--div">
              <input className="formTravel__submit" type="submit" value="Enregistrer mon nouveau voyage" />
            </div>

          </form>
        </div>
      )}

    </div>
  );
};

export default FormUpdateTravel;
