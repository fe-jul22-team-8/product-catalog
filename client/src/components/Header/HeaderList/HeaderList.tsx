import { NavLink } from 'react-router-dom';
import styles from './HeaderList.module.scss';

export const ROUTER = {
  home: '/',
  phones: '/phones',
  tablets: '/tablets',
  accessories: '/accessories',
  favourites: 'favourites',
  cart: '/cart',
  productDetalePage: ':phoneId',
};

export const HeaderList: React.FC = () => (
  <nav className={styles.header__list}>
    <NavLink to={ROUTER.home} className={styles.header__link}>
      Home
    </NavLink>
    <NavLink to={ROUTER.phones} className={styles.header__link}>
      Phones
    </NavLink>
    <NavLink to={ROUTER.tablets} className={styles.header__link}>
      Tablets
    </NavLink>
    <NavLink to={ROUTER.accessories} className={styles.header__link}>
      Accessories
    </NavLink>
  </nav>
);
