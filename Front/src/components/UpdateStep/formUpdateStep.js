/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import { useParams } from 'react-router-dom';
import Spinner from 'src/components/Spinner';

import ImageUploader from 'react-images-upload';
import './styles.scss';

const FormUpdateStep = ({
  fetchDataStep,
  title,
  description,
  latitude,
  longitude,
  step_date,
  picture,
  changeDataStep,
  loading,
}) => {
  console.log(picture);
  const { id, type } = useParams();
  useEffect(() => {
    changeDataStep(id, 'id');
    changeDataStep(type, 'type');
    fetchDataStep();
  }, []);

  return (

    <div className="FormUpdateStep">
      {loading && (
      <Spinner />
      )}
      {!loading
        && (
        <form action="" className="FormUpdateStep__formElt">

          <Map onChange={changeDataStep} latitude={latitude} longitude={longitude} />

          <div className="formStep__element--allInput FormUpdateStep__formElt--allInput">
            <div className="FormUpdateStep__formElt--allInput">
              <FormInput
                type="text"
                name="title"
                content="Titre"
                onChange={changeDataStep}
                value={title}
              />

              <div className="floating-label">
                <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" value={description} onChange={changeDataStep} />
                <label htmlFor="description"> Description (255 caractères maximum) </label>
              </div>

              <FormInput
                type="text"
                name="step_date"
                content="Date (JJ/MM/AAAA)"
                onChange={changeDataStep}
                value={step_date}
              />
            </div>

            <div className="FormUpdateStep__formElt--pictures">
              <div className="carre" />
              <div className="carre" />
              <div className="carre" />
              <img src={picture[0].data} alt="" />
              <div className="carre" />
              <input type="file" name="" id="" />
            </div>

            <div className="FormUpdateStep__formElt--finalInput">
              <input className="formStep__element--submit FormUpdateStep__submit" type="submit" value="Enregistrer l'étape" />
              <input className="formStep__element--submit FormUpdateStep__delete" type="submit" value="Supprimer l'étape" />
            </div>
          </div>

        </form>
        )}

    </div>
  );
};

export default FormUpdateStep;
