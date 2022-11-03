import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from './CartList.module.scss';

export const CartList = () => {
  const { setCardData, cardData } = useContext(CardContext);

  return (
    <div className={styles.CartPages}>
      <section className={styles.CartPages__wrapper}>
        <div className={styles.CartPages__cardWrapper}>
          <div className={styles.CartPages__card}>cart</div>
          <div className={styles.CartPages__card}>cart</div>
          <div className={styles.CartPages__card}>cart</div>
          <div className={styles.CartPages__card}>cart</div>
        </div>
      </section>
    </div>
  );
}