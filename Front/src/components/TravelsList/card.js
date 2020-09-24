import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CardTravel = ({
  title, description, image, url, onClick,
}) => {
  const handleClickDelete = (evt) => {
    evt.preventDefault();
    onClick(url);
  };
  return (
    <div className="cardTravel">
      <a href={`/travel/${url}`} className="travels__inProgress">
        <p className="travels--icon" onClick={handleClickDelete}>˟</p>
        <img src={`http://34.239.44.174/uploads/pictures/${image}`} alt="" />
        <div className="travels__commentary">
          <h3 className="commentary--title">{title}</h3>
          <p className="commentary--text">{description}</p>
        </div>
      </a>
    </div>
  );
};

CardTravel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
};

export default CardTravel;
