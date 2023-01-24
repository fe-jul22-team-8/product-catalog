import styles from './FavouritesTitle.module.scss';
import house from '../../icons/house.svg';
import arrow from '../../icons/arrowRight.svg';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../Header/HeaderList';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

export const FavouritesTitle = () => {
  const { favouriteList } = useContext(CardContext);

  const count = favouriteList.length;

  return (
    <div className={styles.title}>
      <div className={styles.title_navigation}>
        <NavLink to={ROUTER.home}>
          <img src={house} alt="home" className={styles.title_house} />
        </NavLink>
        <img src={arrow} alt="arrow" className={styles.title_arrow} />
        <p className={styles.title_arrowText}>Favourites</p>
      </div>
      <h1 className={styles.title_lable}>Favourites</h1>
      <p className={styles.title_count}>{`${count} items`}</p>
    </div>
  )
}