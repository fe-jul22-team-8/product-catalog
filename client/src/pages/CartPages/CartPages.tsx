import styles from './CartPages.module.scss';
import arrow from '../../icons/greyArrowLeft.svg';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

export const CartPages = () => {
  const { setCardData, cardData } = useContext(CardContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.title__navigation}>
            <img
              src={arrow}
              alt="arrow"
              className={styles.title__arrow}
            />
            <p className={styles.title__arrowText}>Back</p>
          </div>
          <h1 className={styles.title__headline}>Cart</h1>
        </div>
        <div className={styles.CartContainer}>
          <div className={styles.CartPages}>
            <section className={styles.CartPages__wrapper}>
              <div className={styles.CartPages__cardWrapper}>
                <div className={styles.CartPages__card}>cart</div>
                <div className={styles.CartPages__card}>cart</div>
                <div className={styles.CartPages__card}>cart</div>
                <div className={styles.CartPages__card}>cart</div>
              </div>
              <div className={styles.checkout}>
                <h3 className={styles.checkout__total}>
                  ${cardData.reduce((a, b) => a + b.price, 0)}
                </h3>
                <p className={styles.checkout__count}>Total for {cardData.length} items</p>
                <div className={styles.checkout__button}>Checkout</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
