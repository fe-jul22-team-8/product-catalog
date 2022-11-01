import './BurgerMenu.scss';
import heart from '../../icons/heart.svg';
import logo from '../../icons/logo.png';
import cross from '../../icons/cross.png';
import basket from '../../icons/basket.png';

export function BurgerMenu() {
  return (
    <div className="burger">
      <section className="burger__top">
        <div className="mainLogo">
          <a href="#">
            <img src={logo} className="logo-img" />
          </a>
        </div>
        <div className="burger__top-cross">
          <a href="#">
            <img src={cross} className="cross-icon" />
          </a>
        </div>
      </section>

      <ul className="burger__list">
        <li className="burger__item">
          <a href="#" className="burger__link">
            home
          </a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link">
            phones
          </a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link">
            tablets
          </a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link burger__accessories">
            accessories
          </a>
        </li>
      </ul>

      <footer className="burger__bottom">
        <a href="#" className="burger__favourites">
          <img src={heart} alt="" className="burger__bottom-heart" />
        </a>
        <a href="#" className="burger__bottom-basket">
          <img src={basket} alt="" className="basket-img" />
        </a>
      </footer>
    </div>
  );
}
