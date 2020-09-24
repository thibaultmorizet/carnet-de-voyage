import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({
  name,
  spe,
  job,
  photo,
  link,
}) => (
  <>
    <a href={link} className="card">

      <img className="card__img" src={photo} alt="salut" />
      <img className="card__spe" src={spe} alt="salut" />
      <div className="card__content">
        <h2 className="card__content--title">{name}</h2>
        <span className="card__content--spe">{job}</span>
      </div>

    </a>

  </>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  spe: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
