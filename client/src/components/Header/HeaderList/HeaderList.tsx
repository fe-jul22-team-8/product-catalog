import { NavLink } from 'react-router-dom';
import './headerList.scss';

export const ROUTER = {
  home: '/',
  phones: '/',
  tablets: '/tablets',
  accessories: '/accessories',
  cart: '/cart',
};

export const HeaderList: React.FC = () => (
  <nav className="header__list">
    <NavLink to={ROUTER.home} className="header__link">
      Home
    </NavLink>
    <NavLink to={ROUTER.phones} className="header__link">
      Phones
    </NavLink>
    <NavLink to={ROUTER.tablets} className="header__link">
      Tablets
    </NavLink>
    <NavLink to={ROUTER.accessories} className="header__link">
      Accessories
    </NavLink>
  </nav>
);
