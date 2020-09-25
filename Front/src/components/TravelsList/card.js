import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './styles.scss';

Modal.setAppElement('#root');

const CardTravel = ({
  title, description, image, url, onClick,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickDelete = (evt) => {
    evt.preventDefault();
    onClick(url);
    closeModal();
    const elementToDelete = document.querySelector(`.travel${url}`);
    elementToDelete.remove();
  };
  return (
    <div className="cardTravel">
      <div href={`/travel/${url}`} className={`travel${url}`}>
        <p className="travels--icon" onClick={openModal}>˟</p>
        <a href={`/travel/${url}`}>
          <img src={`http://34.239.44.174/uploads/pictures/${image}`} alt="" />
          <div className="travels__commentary">
            <h3 className="commentary--title">{title}</h3>
            <p className="commentary--text">{description}</p>
          </div>
        </a>

      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modalEx"
        style={{
          overlay: {
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        <div className="modalEx__content">
          <h2 className="modalEx__content--title">Êtes vous sur de vouloir supprimer ce voyage ?</h2>
          <button className="modalEx__content--delete" onClick={handleClickDelete}>Supprimer</button>
          <button className="modalEx__content--close" onClick={closeModal}>Annuler</button>
        </div>
      </Modal>
    </div>
  );
};

CardTravel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardTravel;
