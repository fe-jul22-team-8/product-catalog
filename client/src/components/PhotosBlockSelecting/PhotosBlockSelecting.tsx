import styles from './PhotosBlockSelecting.module.scss';
import { PhonesDataContext } from '../../context/DataContext';
import { BASE_URL } from '../../utils/fetchProducts';
import { Phone } from '../../types/Phone';
import { useState, useContext } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export const PhotosBlockSelecting = () => {
  const { phonesList, isLoading } = useContext(PhonesDataContext);
  const { productId } = useParams();
  const currentPhone = phonesList.find((phone) => phone.id === productId);
  const [currentImg, setCurrentImg] = useState(`${BASE_URL}/${currentPhone?.image}`);
  const images = currentPhone?.images;


  const handleClick = (event: any) => {
    setCurrentImg(event.currentTarget.getAttribute('src'));
  };
  return (
    <div className={styles.PhotosBlock}>
      <div className={styles.PhotosBlock__sidePanel}>
        {images?.map(img => (
          <img
          src={`${BASE_URL}/${img}`}
          className={styles.PhotosBlock__sidePanel_photo}
          onClick={handleClick}
        />
        ))}

      </div>
      <div className={styles.PhotosBlock__mainPhoto}>
        <img src={currentImg} className={styles.PhotosBlock__mainPhoto_photo} />
      </div>
    </div>
  );
}
