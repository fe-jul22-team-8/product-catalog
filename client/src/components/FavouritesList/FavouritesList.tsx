import { PhonesDataContext } from '../../context/DataContext';
import { useContext, useMemo } from 'react';
import { CardContext } from '../../context/CardContext';
import { Card } from '../Card';
import styles from './FavouritesList.module.scss';
import { Phone } from '../../types/Phone';

export const FavouritesList = () => {
  const { phonesList } = useContext(PhonesDataContext);
  const { favouriteList } = useContext(CardContext);

  const renderList = useMemo(() => {
    return phonesList.filter((phone: Phone) =>
      favouriteList.includes(phone.id),
    );
  }, [phonesList, favouriteList]);

  return (
    <div className={styles.container}>
      {renderList.map((phone) => (
        <Card key={phone.id} phone={phone} />
      ))}
    </div>
  );
};
