import './BurgerMenu.scss';
import heart from '../../icons/heart.svg';
/* eslint-disable */
const logotype = require('../../icons/logotype.png');
const cross = require('../../icons/cross.png');
const basket = require('../../icons/basket.png');

function BurgerMenu() {
  return (
    <div className='burger'>
      <section className="burger__top">
        <div className="mainLogo">
          <a href="#">
            <img src={logotype} className="logo-img"/>
          </a>
        </div>
        <div className="burger__top-cross">
          <a href="#">
            <img src={cross} className="cross-icon"/>
          </a>
        </div>

      </section>

      <ul className="burger__list">
        <li className="burger__item">
          <a href="#" className="burger__link">home</a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link">phones</a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link">tablets</a>
        </li>
        <li className="burger__item">
          <a href="#" className="burger__link burger__accessories">
            accessories
          </a>
        </li>
      </ul>

      <footer className="burger__bottom">
        <a href="#" className="burger__favourites">
          <img src={heart} alt="" className='burger__bottom-heart' />
        </a>
        <a href="#" className="burger__bottom-basket">
          <img src={basket} alt="" className='basket-img' />
        </a>
      </footer>
    </div>
  );
}

export default BurgerMenu;
