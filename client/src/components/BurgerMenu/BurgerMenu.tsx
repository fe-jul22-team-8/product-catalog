import styles from './BurgerMenu.module.scss';
import heart from '../../icons/heart.svg';
import logo from '../../icons/logo.svg';
import cross from '../../icons/cross.png';
import basket from '../../icons/basket.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { Counter } from '../Counter/Counter';

interface Props {
  setBurgerMenuSelected: (value: boolean) => void;
  burgerMenuSelected: boolean;
}

export const BurgerMenu: React.FC<Props> = ({
  setBurgerMenuSelected,
  burgerMenuSelected,
}) => {
  const { cardData } = useContext(CardContext);
  const { favouriteList } = useContext(CardContext);

  const handlerClick = (value: boolean) => setBurgerMenuSelected(!value);

  return (
    <div className={styles.burger}>
      <div className={styles.burger__top}>
        <div className={styles.mainLogo}>
          <NavLink to="/">
            <img
              src={logo}
              className={styles.logo_img}
              onClick={() => handlerClick(burgerMenuSelected)}
            />
          </NavLink>
        </div>
        <div
          className={styles.burger__cross}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <NavLink to="#">
            <img src={cross} className={styles.cross_icon} />
          </NavLink>
        </div>
      </div>

      <nav>
        <ul className={styles.burger__list}>
          <li className={styles.burger__item}>
            <NavLink
              to="/"
              className={styles.burger__link}
              onClick={() => handlerClick(burgerMenuSelected)}
            >
              home
            </NavLink>
          </li>
          <li className={styles.burger__item}>
            <NavLink
              to="/phones"
              className={styles.burger__link}
              onClick={() => handlerClick(burgerMenuSelected)}
            >
              phones
            </NavLink>
          </li>
          <li className={styles.burger__item}>
            <NavLink
              to="/tablets"
              className={styles.burger__link}
              onClick={() => handlerClick(burgerMenuSelected)}
            >
              tablets
            </NavLink>
          </li>
          <li
            className={styles.burger__item}
            onClick={() => handlerClick(burgerMenuSelected)}
          >
            <NavLink
              to="/accessories"
              className={[styles.burger__link, styles.burger__accessories].join(
                ' ',
              )}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.burger__bottom}>
        <NavLink
          to="/favourites"
          className={styles.burger__favourites}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <img
            src={heart}
            alt=""
            className={styles.heart_img}
            onClick={() => handlerClick(burgerMenuSelected)}
          />
        </NavLink>

        {favouriteList.length > 0 && (
          <div className={styles.burger__heart}>
            <Counter count={favouriteList.length} />
          </div>
        )}

        <NavLink
          to="/cart"
          className={styles.burger__basket}
          onClick={() => handlerClick(burgerMenuSelected)}
        >
          <img
            src={basket}
            alt=""
            className={styles.basket_img}
            onClick={() => handlerClick(burgerMenuSelected)}
          />
        </NavLink>

        {cardData.length > 0 && (
          <div className={styles.burger__bag}>
            <Counter count={cardData.length} />
          </div>
        )}
      </div>
    </div>
  );
};
