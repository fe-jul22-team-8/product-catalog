import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons/logo.svg';
import arrow from '../../icons/arrow.svg';
import styles from './footer.module.scss';
import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {

  const handleToTheTop = () => {
      scroll.scrollToTop();
  }
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <Link to="/" className={styles.footer__icon}>
          <img src={logo} alt="logo" className={styles.footer__logo} />
        </Link>

        <div className={styles.footer__list}>
          <NavLink to="/Home" className={styles.footer__item}>
            Github
          </NavLink>
          <NavLink to="/Phone" className={styles.footer__item}>
            Contacts
          </NavLink>
          <NavLink to="/Tablets" className={styles.footer__item}>
            Rights
          </NavLink>
        </div>

        <button className={styles.footer__button} onClick={handleToTheTop}>
          Back to top
          <img src={arrow} alt="logo" className={styles.footer__arrow} />
        </button>
      </div>
    </div>
  );
};
