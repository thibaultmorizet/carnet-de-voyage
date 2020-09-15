/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Map from 'src/components/Map';
import FormInput from 'src/components/FormInput';
import './styles.scss';

const FormUpdateStep = () => (
  <div className="FormUpdateStep">
    <form action="" className="FormUpdateStep__formElt">

      <Map onChange={() => console.log('salut la map')} latitude={64.5731537} longitude={11.52803643954819} />

      <div className="formStep__element--allInput FormUpdateStep__formElt--allInput">
        <div className="FormUpdateStep__formElt--allInput">
          <FormInput
            type="text"
            name="title"
            content="Titre"
            onChange={() => console.log('salut la map')}
          />

          <div className="floating-label">
            <textarea type="text" className="floating-input" name="description" placeholder=" " maxLength="255" rows="9" onChange={() => console.log('salut la map')} />
            <label htmlFor="description"> Description (255 caractères maximum) </label>
          </div>

          <FormInput
            type="text"
            name="step_date"
            content="Date (JJ/MM/AAAA)"
            onChange={() => console.log('salut la map')}
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

export default FormUpdateStep;
