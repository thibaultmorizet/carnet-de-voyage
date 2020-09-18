import React from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FormInput from 'src/components/FormInput';
import { Link } from 'react-router-dom';
import SingleComment from './singleComment';
import './styles.scss';

const Comments = ({
  changeValueComment, sendComment, like, oldComment,
}) => {
  console.log('oldComment', like);
  const showAllComment = () => {
    console.log('je suis dans sshowAll');
    return oldComment.map((elt) => <SingleComment key={elt.id} data={elt} />);
  };
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
      {oldComment !== null && showAllComment()}
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

export default Comments;
