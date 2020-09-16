/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import './styles.scss';

const FormUpdateStep = ({
  fetchDataStep,
  title,
  description,
  latitude,
  longitude,
  step_date,
  picture,
}) => {
  useEffect(() => {
    fetchDataStep();
  }, []);

  const changeDate = () => {
    const datat = new Date(step_date);
    console.log(datat);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const event = datat.toLocaleDateString('de-DE', options);
    console.log(event);
  };

  changeDate();
  return (
    <div className="FormUpdateStep">
      <form action="" className="FormUpdateStep__formElt">

        <Map onChange={() => console.log('salut la map')} latitude={latitude} longitude={longitude} />

        <div className="formStep__element--allInput FormUpdateStep__formElt--allInput">
          <div className="FormUpdateStep__formElt--allInput">
            <FormInput
              type="text"
              name="title"
              content="Titre"
              onChange={() => console.log('salut la map')}
              value={title}
            />

            <div className="floating-label">
              <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" value={description} onChange={() => console.log('salut la map')} />
              <label htmlFor="description"> Description (255 caractères maximum) </label>
            </div>

            <FormInput
              type="text"
              name="step_date"
              content="Date (JJ/MM/AAAA)"
              onChange={() => console.log('salut la map')}
              value={step_date}
            />
          </div>

          <div className="FormUpdateStep__formElt--pictures">
            <div className="carre" />
            <div className="carre" />
            <div className="carre" />
            <div className="carre" />
          </div>

          <div className="FormUpdateStep__formElt--finalInput">
            <input className="formStep__element--submit FormUpdateStep__submit" type="submit" value="Enregistrer l'étape" />
            <input className="formStep__element--submit FormUpdateStep__delete" type="submit" value="Supprimer l'étape" />
          </div>
        </div>

      </form>
    </div>
  );
};

export default FormUpdateStep;
