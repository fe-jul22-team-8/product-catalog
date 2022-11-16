import { Phone } from '../../types/Phone';
import { useContext, useState, useEffect } from 'react';
import { CartItem } from '../CartItem';
import styles from './CartList.module.scss';
import { PhonesDataContext } from '../../context/DataContext';
import { CardContext } from '../..//context/CardContext';

export const CartList = () => {
  const data = JSON.parse(localStorage.getItem('id') || '{}');
  const { phonesList, setPhonesList } = useContext(PhonesDataContext);
  const { cardData, setCardData, setSumOfItems, sumOfItems } =
    useContext(CardContext);
  const [cartList, setCartList] = useState<Phone[]>([]);

  useEffect(() => {
    setCartList(phonesList.filter((phone: Phone) => data?.includes(phone.id)));
  }, [phonesList]);

  return (
    <div className={styles.CartList}>
      <div className={styles.CartList__wrapper}>
        {cartList.map((phone: Phone) => (
          <CartItem
            key={+phone.id}
            name={phone.name}
            img={phone.image}
            price={phone.price}
            keyItem={phone.id}
            setCartList={setCartList}
            setCardData={setCardData}
            setPhonesList={setPhonesList}
            cardData={cardData}
            setSumOfItems={setSumOfItems}
            sumOfItems={sumOfItems}
          />
        ))}
      </div>
    </div>
  );
};
