import { Link, NavLink } from 'react-router-dom';
import logo from '../../icons/logo.png';
import arrow from '../../icons/arrow.svg';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__icon">
          <img src={logo} alt="logo" className="footer__logo" />
        </Link>

        <div className="footer__list">
          <NavLink to="/Home" className="footer__list-item">
            Github
          </NavLink>
          <NavLink to="/Phone" className="footer__list-item">
            Contacts
          </NavLink>
          <NavLink to="/Tablets" className="footer__list-item">
            Rights
          </NavLink>
        </div>

        <button className="footer__button">
          Back to top
          <img src={arrow} alt="logo" className="footer__button-icon" />
        </button>
      </div>
    </div>
  );
};
