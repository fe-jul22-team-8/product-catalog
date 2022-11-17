import { useParams } from 'react-router-dom';
import { PhotosBlockSelecting } from '../../components/PhotosBlockSelecting';
import style from './ProductDetalePage.module.scss';
import { useContext } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { Phone } from '../../types/Phone';
import { ColorSize } from '../../components/ColorSize';

export const ProductDetalePage = () => {
  const { phonesList, isLoading } = useContext(PhonesDataContext);
  const { productId } = useParams();
  const currentPhone = phonesList.find((phone) => phone.id === productId);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{currentPhone?.name}</div>
      <div className={style.photo}>
        <PhotosBlockSelecting />
      </div>
      <div className={style.variant}>
        <ColorSize />
      </div>
      <div className={style.about}>about</div>
      <div className={style.tech}>Tech specs</div>
      <div className={style.like}>Recommended goods</div>
    </div>
  );
};
