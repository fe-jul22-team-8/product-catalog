import { Phone } from '../../types/Phone';
import { useContext } from 'react';
import { CartItem } from '../CartItem';
import styles from './CartList.module.scss';
import { PhonesDataContext } from '../../context/DataContext';

export const CartList = () => {
  const data = localStorage.getItem('id');
  const { phonesList } = useContext(PhonesDataContext);

  const phones = phonesList.filter((phone:Phone) => data?.includes(phone.id));

  return (
    <div className={styles.CartList}>
      <div className={styles.CartList__wrapper}>
        {phones.map((phone: Phone) => (
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
};
