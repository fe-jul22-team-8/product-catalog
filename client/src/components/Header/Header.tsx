import { HeaderList } from './HeaderList';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../icons/logo.svg';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { Counter } from '../Counter';

interface Props {
  setBurgerMenuSelected: (value: boolean) => void;
  burgerMenuSelected: boolean;
}

export const Header: React.FC<Props> = ({
  setBurgerMenuSelected,
  burgerMenuSelected,
}) => {
  const { cardData } = useContext(CardContext);
  const { favouriteList } = useContext(CardContext);

  const handlerClick = (value: boolean) => setBurgerMenuSelected(!value);

  return (
    <div className={styles.header}>
      <div className={styles.header__nav}>
        <div className={styles.header__icon}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.header__logo} />
          </Link>
        </div>

        <HeaderList />
      </div>

      <div className={styles.header__icons}>
        {favouriteList.length > 0 && (
          <div className={styles.header__heart}>
            <Counter count={favouriteList.length} />
          </div>
        )}

        <NavLink
          to="/favourites"
          className={[styles.header__item, styles.header__favourites].join(' ')}
        />

        {cardData.length > 0 && (
          <div className={styles.header__bag}>
            <Counter count={cardData.length} />
          </div>
        )}

        <NavLink
          to="/cart"
          className={[styles.header__item, styles.header__cart].join(' ')}
        />
      </div>

      <div
        className={styles.header__burger}
        onClick={() => handlerClick(burgerMenuSelected)}
      >
        <Link to="/" className={styles.burger_menu} />
      </div>
    </div>
  );
};
