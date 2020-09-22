import React from 'react';
import PropTypes from 'prop-types';
import { changeDateFormat } from 'src/selectors/carnetDeVoyage';
import './styles.scss';

const SingleComment = ({
  date,
  firstName,
  lastName,
  comment,
}) => {
  const newData = (dateWanted) => {
    if (date.length > 12) {
      return changeDateFormat(dateWanted);
    }
    return date;
  };
  return (
    <div className="singleComment">
      <div className="singleComment__bubble">
        <span className="singleComment__bubble--name">{firstName} {lastName}</span>
        <p className="singleComment__bubble--content">{comment} </p>
        <span className="singleComment__bubble--date">{newData(date)}</span>
      </div>
      <div className="singleComment__triangle" />
    </div>
  );
};

SingleComment.propTypes = {
  date: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default SingleComment;
