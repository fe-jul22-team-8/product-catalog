import { Phone } from '@/types/Phone';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { CartItem } from '../CartItem';
import styles from './CartList.module.scss';

export const CartList = () => {
  const { setCardData, cardData } = useContext(CardContext);

  return (
    <div className={styles.CartList}>
      <div className={styles.CartList__wrapper}>
        {cardData.map((phone: Phone) => (
          <CartItem
            key={+phone.id}
            name={phone.name}
            img={phone.image}
            price={phone.price}
          />
        ))}
      </div>
    </div>
  );
}