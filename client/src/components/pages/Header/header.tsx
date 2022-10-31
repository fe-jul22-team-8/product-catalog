import { HeaderList } from './HeaderList/HeaderList';
import { Link, NavLink } from 'react-router-dom';
import '../Header/header.scss';
import logo from './img/Logo.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__icon">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="header__logo"
            />
          </Link>
        </div>

        <HeaderList />
      </div>

      <div className="header__icons">
        <NavLink
          to="/"
          className="
              header__item-link
              header__item-link-favourites
            "
        />
        <NavLink
          to="/"
          className="
              header__item-link
              header__item-link-cart
            "
        />
      </div>

      <div className='header__burger'>
        <Link to="/" className="burger_menu" />
      </div>
    </div>
  );
};
