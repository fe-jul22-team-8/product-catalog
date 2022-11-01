import { NavLink } from 'react-router-dom';
import './headerList.scss';

export const HeaderList: React.FC = () => (
  <nav className="header__list">
    <NavLink
      to="/Home"
      className="header__link"
    >
      Home
    </NavLink>
    <NavLink
      to="/phones"
      className="header__link"
    >
      Phones
    </NavLink>
    <NavLink
      to="/Tablets"
      className="header__link"
    >
      Tablets
    </NavLink>
    <NavLink
      to="/Accessories"
      className="header__link"
    >
      Accessories
    </NavLink>
  </nav>
);
