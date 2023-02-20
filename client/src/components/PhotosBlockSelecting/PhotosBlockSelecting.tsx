import styles from './PhotosBlockSelecting.module.scss';
import { BASE_URL } from '../../utils/fetchProducts';
import { useState } from 'react';
import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone | undefined;
}

export const PhotosBlockSelecting: React.FC<Props> = ({ phone }) => {
  const images = phone?.images;
  const [currentImg, setCurrentImg] = useState('');

  const handleClick = (event: any) => {
    setCurrentImg(event.currentTarget.getAttribute('src'));
  };

  return (
    <div className={styles.photoBlock}>
      <img
        src={currentImg || (images && `${BASE_URL}/${images[0]}`)}
        className={styles.photoBlock__img}
      />

      <div className={styles.photoBlock__sidePanel}>
        {images?.map(
          (img) =>
            img && (
              <img
                key={img}
                src={`${BASE_URL}/${img}`}
                className={styles.photoBlock__sidePanel_item}
                onClick={handleClick}
              />
            ),
        )}
      </div>
    </div>
  );
};
