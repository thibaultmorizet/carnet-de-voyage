import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FormInput from 'src/components/FormInput';
import { Link } from 'react-router-dom';
import SingleComment from './singleComment';
import './styles.scss';

const Comments = ({
  changeValueComment, sendComment, like, oldComment, comment,
}) => {
  const today = new Date();
  const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  console.log(oldComment);

  const showAllComment = () => oldComment.map((elt) => (
    <SingleComment
      key={elt.id}
      date={elt.createdAt}
      firstName={elt.user.firstName}
      lastName={elt.user.lastName}
      comment={elt.comment}
    />
  ));
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendComment();
  };
  return (
    <div className="comment">
      <h4 className="comment__title">Commentaires
        <span className="comment__title--nblike">{like} likes</span>
        <FontAwesomeIcon className="comment__title--icon" icon={faThumbsUp} />
      </h4>
      <div className="comment__allComment">
        {oldComment !== null && showAllComment()}
        {/* {!essai && (
        <SingleComment
          key={comment}
          date={date}
          firstName="En cours"
          lastName="de validation"
          comment={comment}
        />
        )} */}
      </div>
      {Cookies.get('loggedIn') && (
      <form action="" className="comment__add" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="message"
          content="Ajouter un commentaire"
          onChange={changeValueComment}
        />
        <p className="comment__add--span">255 caractères maximum</p>

        <input className="comment__add--comment" type="submit" value="Ajouter un commentaire" />
      </form>
      )}

      {!Cookies.get('loggedIn') && (
      <Link className="comment__connect" to="/login">Se connecter pour commenter</Link>
      )}

    </div>
  );
};

Comments.propTypes = {
  changeValueComment: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
  like: PropTypes.number.isRequired,
  oldComment: PropTypes.array.isRequired,
};

export default Comments;
