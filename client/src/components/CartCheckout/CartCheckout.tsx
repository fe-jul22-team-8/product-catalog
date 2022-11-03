import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from './CartCheckout.module.scss';

export const CartCheckout = () => {
  const { setCardData, cardData } = useContext(CardContext);
  console.log(cardData)

  const totalPrice = cardData.map(item => item.price).reduce((a, b) => a + b, 0);

  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__total}>
        ${totalPrice}
      </h3>
      <p className={styles.checkout__count}>Total for {cardData.length} items</p>
      <div className={styles.checkout__button}>Checkout</div>
    </div>
  )
}
