import { getPhones } from '../../api/phones';
import { Phone } from '@/types/Phone';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CardContext } from '../../context/CardContext';
import { CartItem } from '../CartItem';
import styles from './CartList.module.scss';

export const CartList = () => {
  const [phonesList, setPhonesList] = useState<Phone[]>([]);
  const data = localStorage.getItem('id');
  const loadData = useMemo(async () => {
      const phonesFromServer = await getPhones('/phones');
      setPhonesList(phonesFromServer.resultPerPage);
      return phonesList;
  }, [phonesList]);

  useEffect(() => {
    loadData;
  }, []);
  
  const phones = phonesList.filter(phone=>data?.includes(phone.id));
  
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
}