import { PhonesDataContext } from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../context/CardContext';
import { Card } from '../Card';
import styles from './FavouritesList.module.scss';
import { Phone } from '../../types/Phone';

export const FavouritesList = () => {
  const { phonesList } = useContext(PhonesDataContext);
  const { favouriteList } = useContext(CardContext);
  const [cartList, setCartList] = useState<Phone[]>([]);

  useEffect(() => {
    setCartList(phonesList.filter((phone: Phone) => favouriteList.includes(phone.id)));
  }, [favouriteList]);

  return (
    <div className={styles.container}>
      {cartList.map((phone) => (
        <Card key={phone.id} phone={phone} />
      ))}
    </div>
  )
}