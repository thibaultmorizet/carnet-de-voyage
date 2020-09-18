import React from 'react';
import { changeDateFormat } from 'src/selectors/carnetDeVoyage';
import './styles.scss';

const SingleComment = ({ data }) => {
  console.log(data);
  const newData = changeDateFormat(data.createdAt);
  return (
    <div className="singleComment">
      <div className="singleComment__bubble">
        <span className="singleComment__bubble--name">{data.user.firstName} {data.user.lastName}</span>
        <p className="singleComment__bubble--content">{data.comment} </p>
        <span className="singleComment__bubble--date">{newData}</span>
      </div>
      <div className="singleComment__triangle" />
    </div>
  );
};

export default SingleComment;
