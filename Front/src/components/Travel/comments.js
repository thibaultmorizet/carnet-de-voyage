import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FormInput from 'src/components/FormInput';
import { Link } from 'react-router-dom';
import { errorMessage } from 'src/selectors/carnetDeVoyage';
import SingleComment from './singleComment';
import './styles.scss';

const Comments = ({
  changeValueComment,
  sendComment,
  like,
  oldComment,
  comment,
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
    const inputElement = evt.target.querySelector('input');
    if (inputElement.value.length > 2 && inputElement.value.length < 255) {
      sendComment();
      inputElement.value = '';
    }
    else {
      const message = 'Votre commentaire doit contenir entre 2 et 255 caractères';
      errorMessage(message, '.comment__add--div');
    }
  };
  return (
    <div className="comment">
      <h4 className="comment__title">Commentaires
        <span className="comment__title--nblike">{like} likes</span>
        <FontAwesomeIcon className="comment__title--icon" icon={faThumbsUp} />
      </h4>
      <div className="comment__allComment">
        {oldComment !== null && showAllComment()}
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

        <div className="comment__add--div">
          <input className="comment__add--comment" type="submit" value="Ajouter un commentaire" />
        </div>

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
  comment: PropTypes.string.isRequired,
};

export default Comments;
