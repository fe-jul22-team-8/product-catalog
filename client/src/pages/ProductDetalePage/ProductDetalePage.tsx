import { useParams } from 'react-router-dom';
import style from './ProductDetalePage.module.scss';

export const ProductDetalePage = () => {
  const { productId } = useParams();
  return (
    <div className={style.wrapper}>
      <div className={style.title}>title</div>
      <div className={style.photo}>photo</div>
      <div className={style.variant}>Variants/acions block</div>
      <div className={style.about}>about</div>
      <div className={style.tech}>Tech specs</div>
      <div className={style.like}>Recommended goods</div>
    </div>
  );
};
