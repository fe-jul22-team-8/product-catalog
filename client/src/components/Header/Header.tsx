import { HeaderList } from './HeaderList';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../icons/logo.svg';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

interface Props {
  setBurgerMenuSelected: (value: boolean) => void;
  burgerMenuSelected: boolean;
}

export const Header: React.FC<Props> = ({
  setBurgerMenuSelected,
  burgerMenuSelected,
}) => {
  const { cardData } = useContext(CardContext);
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
        <NavLink
          to="/favourites"
          className={[styles.header__item, styles.header__favourites].join(' ')}
        />
        {cardData.length > 0 && (
          <div className={styles.header__counter}>
            <span className={styles.header__counter_text}>
              {cardData.length}
            </span>
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
