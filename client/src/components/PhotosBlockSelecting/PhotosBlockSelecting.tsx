import styles from './PhotosBlockSelecting.module.scss';
import { PhonesDataContext } from '../../context/DataContext';
import { BASE_URL } from '../../utils/fetchProducts';
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

export const PhotosBlockSelecting = () => {
  const { phonesList, isLoading } = useContext(PhonesDataContext);
  const { phoneId } = useParams();
  console.log(phoneId);

  const currentPhone = phonesList.find((phone) => phone.phoneId === phoneId);
  const images = currentPhone?.images;
  const [currentImg, setCurrentImg] = useState('');

  const handleClick = (event: any) => {
    setCurrentImg(event.currentTarget.getAttribute('src'));
  };
  return (
    <div className={styles.PhotosBlock}>
      <div className={styles.PhotosBlock__sidePanel}>
        {images?.map(
          (img) =>
            img && (
              <img
                key={img}
                src={`${BASE_URL}/${img}`}
                className={styles.PhotosBlock__sidePanel_photo}
                onClick={handleClick}
              />
            ),
        )}
      </div>
      <div className={styles.PhotosBlock__mainPhoto}>
        <img
          src={currentImg || (images && `${BASE_URL}/${images[0]}`)}
          className={styles.PhotosBlock__mainPhoto_photo}
        />
      </div>
    </div>
  );
};
