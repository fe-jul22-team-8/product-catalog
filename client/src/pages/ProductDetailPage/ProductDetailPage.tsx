import { useParams } from 'react-router-dom';
import { PhotosBlockSelecting } from '../../components/PhotosBlockSelecting';
import style from './ProductDetailPage.module.scss';
import { useContext } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { ColorSize } from '../../components/ColorSize';

export const ProductDetailPage = () => {
  const { phonesList } = useContext(PhonesDataContext);
  const { phoneId } = useParams();
  const currentPhone = phonesList.find((phone) => phone.phoneId === phoneId);

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
