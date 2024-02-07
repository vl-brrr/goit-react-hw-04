import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, onClick, setPhotoModal }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => {
        return (
          <li
            key={item.id}
            className={css.item}
            onClick={() => {
              onClick();
              setPhotoModal(item);
            }}
          >
            <ImageCard photo={item} />
          </li>
        );
      })}
    </ul>
  );
};
