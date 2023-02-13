import { PhonesDataContext } from '../../context/DataContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Categories.module.scss';

export const Categories = () => {
  const { phonesList } = useContext(PhonesDataContext);

  return (
    <div className={styles.categories}>
      <h1 className={styles.categories__title}>Shop by category</h1>
      <div className={styles.categories__content}>
        <NavLink to="/phones" className={styles.categories__card}>
          <div
            className={`${styles.categories__photo} ${styles.categories__mobileimg}`}
          ></div>
          <p className={styles.categories__subtitle}>Mobile phones</p>
          <p className={styles.categories__count}>{phonesList.length} models</p>
        </NavLink>
        <NavLink to="/tablets" className={styles.categories__card}>
          <div
            className={`${styles.categories__photo} ${styles.categories__tabletsimg}`}
          ></div>
          <p className={styles.categories__subtitle}>Tablets</p>
          <p className={styles.categories__count}>0 models</p>
        </NavLink>
        <NavLink to="/accessories" className={styles.categories__card}>
          <div
            className={`${styles.categories__photo} ${styles.categories__accessoriesimg}`}
          ></div>
          <p className={styles.categories__subtitle}>Accessories</p>
          <p className={styles.categories__count}>0 models</p>
        </NavLink>
      </div>
    </div>
  );
};
