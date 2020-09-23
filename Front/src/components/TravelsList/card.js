import React from 'react';
import './styles.scss';

const CardTravel = ({ title, description, image }) => {
  console.log('yo', title);
  return (
    <div className="cardTravel">
      <div className="travels__inProgress">
        <p className="travels--icon">˟</p>
        <img src={`http://34.239.44.174/uploads/pictures/${image}`} alt="" />
        <div className="travels__commentary">
          <h3 className="commentary--title">{title}</h3>
          <p className="commentary--text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTravel;
