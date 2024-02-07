import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

export const ImageModal = ({ modalIsOpen, closeModal, photo }) => {
  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          padding: 'none',
          maxHeight: '610px',
          height: 'auto',
          width: 'auto',
          maxWidth: '1185px',
          top: '50%',
          bottom: 'none',
          right: 'none',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        },
      }}
    >
      <img src={photo.urls.regular} alt={photo.alt_description} className={css.img} />
    </ReactModal>
  );
};
