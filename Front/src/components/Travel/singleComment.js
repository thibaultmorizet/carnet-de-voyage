import React from 'react';
import './styles.scss';

const SingleComment = () => (
  <div className="singleComment">
    <div className="singleComment__bubble">
      <span className="singleComment__bubble--name">Georgette</span>
      <p className="singleComment__bubble--content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto ex cupiditate pariatur quisquam </p>
      <span className="singleComment__bubble--date">19/12/2019</span>
    </div>
    <div className="singleComment__triangle" />
  </div>
);

export default SingleComment;
