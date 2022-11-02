import styles from './BurgerMenu.module.scss';
import heart from '../../icons/heart.svg';
import logo from '../../icons/logo.png';
import cross from '../../icons/cross.png';
import basket from '../../icons/basket.png';

export function BurgerMenu() {
  return (
    <div className={styles.burger}>
      <section className={styles.burger__top}>
        <div className={styles.mainLogo}>
          <a href="#">
            <img src={logo} className={styles.logo_img} />
          </a>
        </div>
        <div className={styles.burger__cross}>
          <a href="#">
            <img src={cross} className={styles.cross_icon} />
          </a>
        </div>
      </section>

      <ul className={styles.burger__list}>
        <li className={styles.burger__item}>
          <a href="#" className={styles.burger__link}>
            home
          </a>
        </li>
        <li className={styles.burger__item}>
          <a href="#" className={styles.burger__link}>
            phones
          </a>
        </li>
        <li className={styles.burger__item}>
          <a href="#" className={styles.burger__link}>
            tablets
          </a>
        </li>
        <li className={styles.burger__item}>
          <a href="#" className={
            [styles.burger__link, styles.burger__accessories].join(' ')
          }>
            accessories
          </a>
        </li>
      </ul>

      <footer className={styles.burger__bottom}>
        <a href="#" className={styles.burger__favourites}>
          <img
            src={heart}
            alt=""
            className={styles.burger__heart}
          />
        </a>
        <a href="#" className={styles.burger__basket}>
          <img
            src={basket}
            alt=""
            className={styles.basket_img}
          />
        </a>
      </footer>
    </div>
  );
}
