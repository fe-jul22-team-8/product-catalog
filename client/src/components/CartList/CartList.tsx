import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from './CartList.module.scss';

export const CartList = () => {
  const { setCardData, cardData } = useContext(CardContext);

  return (
    <div className={styles.CartList}>
      <section className={styles.CartList__wrapper}>
        <div className={styles.CartList__cardWrapper}>
          <div className={styles.CartList__item}>cart</div>
          <div className={styles.CartList__item}>cart</div>
          <div className={styles.CartList__item}>cart</div>
          <div className={styles.CartList__item}>cart</div>
        </div>
      </section>
    </div>
  );
}