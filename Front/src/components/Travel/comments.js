import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FormInput from 'src/components/FormInput';
import { Link } from 'react-router-dom';
import SingleComment from './singleComment';
import './styles.scss';

const Comments = () => (
  <div className="comment">
    <h4 className="comment__title">Commentaires
      <span className="comment__title--nblike">0 likes</span>
      <FontAwesomeIcon className="comment__title--icon" icon={faThumbsUp} />
    </h4>
    <SingleComment />
    <form action="" className="comment__add">
      <FormInput
        type="text"
        name="addComment"
        content="Ajouter un commentaire"
        onChange={() => console.log('comment')}
      />
      <p className="comment__add--span">255 caractères maximum</p>

      <input className="comment__add--comment" type="submit" value="Ajouter un commentaire" />
    </form>

    <Link className="comment__connect" to="/login">Se connecter pour commenter</Link>

  </div>
);

export default Comments;
