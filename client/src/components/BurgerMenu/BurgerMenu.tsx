import styles from './BurgerMenu.module.scss';
import heart from '../../icons/heart.svg';
import logo from '../../icons/logo.svg';
import cross from '../../icons/cross.png';
import basket from '../../icons/basket.png';
import { NavLink } from 'react-router-dom';

interface Props {
  setBurgerMenuSelected: (value: boolean) => void;
  burgerMenuSelected: boolean;
}

export const BurgerMenu: React.FC<Props> = ({
  setBurgerMenuSelected,
  burgerMenuSelected,
}) => {
  const handlerClick = (value: boolean) => setBurgerMenuSelected(!value);
  return (
    <div className={styles.burger}>
      <div className={styles.burger__top}>
        <div className={styles.mainLogo}>
          <NavLink to="#">
            <img src={logo} className={styles.logo_img} />
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
            <NavLink to="#" className={styles.burger__link}>
              home
            </NavLink>
          </li>
          <li className={styles.burger__item}>
            <NavLink to="#" className={styles.burger__link}>
              phones
            </NavLink>
          </li>
          <li className={styles.burger__item}>
            <NavLink to="#" className={styles.burger__link}>
              tablets
            </NavLink>
          </li>
          <li className={styles.burger__item}>
            <NavLink
              to="#"
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
        <NavLink to="#" className={styles.burger__favourites}>
          <img src={heart} alt="" className={styles.burger__heart} />
        </NavLink>
        <NavLink to="#" className={styles.burger__basket}>
          <img src={basket} alt="" className={styles.basket_img} />
        </NavLink>
      </div>
    </div>
  );
};
