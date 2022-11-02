import style from './CartPages.module.scss';
import arrow from '../../icons/arrowRight.svg';

export const CartPages = () => {
  return (
      <div className={style.cartPages}>
        <div className={style.title}>
          <div className={style.title__navigation}>
            <img 
              src={arrow} 
              alt="arrow" 
              className={style.title__arrow} 
            />
            <p className={style.title__arrowText}>Phones</p>
          </div>
          <h1 className={style.title__headline}>Cart</h1>
        </div>
        <section className={style.cartPages__wrapper}>
          <div className={style.cartPages__card__wrapper}>
            <div className={style.cartPages__card}>cart</div>
            <div className={style.cartPages__card}>cart</div>
            <div className={style.cartPages__card}>cart</div>
            <div className={style.cartPages__card}>cart</div>
          </div>
          <div className={style.cartPages__cost__wrapper}>cost</div>
        </section>
      </div>
  );
};
