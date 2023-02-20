import styles from './CartTitle.module.scss';
import arrow from '../../icons/greyArrowLeft.svg';
import { useNavigate } from 'react-router-dom';

export const CartTitle = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.title}>
      <div className={styles.title__navigation} onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" className={styles.title__arrow} />
        <p className={styles.title__arrowText}>Back</p>
      </div>
      <h1 className={styles.title__headline}>Cart</h1>
    </div>
  );
};
