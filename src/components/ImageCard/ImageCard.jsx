import css from './ImageCard.module.css';

export const ImageCard = ({ photo: { alt_description, urls } }) => {
  return <img src={urls.small} alt={alt_description} className={css.img} />;
};
