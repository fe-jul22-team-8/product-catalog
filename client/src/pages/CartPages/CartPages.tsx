import './CartPages.scss';
import arrow from '../../icons/greyArrowLeft.svg';
import { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';

export const CartPages = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  return (
    <>
      <div className='container'>
        <div className="title">
          <div className="title__navigation">
            <img src={arrow} alt="arrow" className="title__arrow" />
            <p className="title__arrowText">Back</p>
          </div>
          <h1 className="title__headline">Cart</h1>
        </div>
        <div className='CartContainer'>
          <div className="CartPages">
            <section className="CartPages__wrapper">
              <div className="CartPages__card-wrapper">
                <div className="CartPages__card">cart</div>
                <div className="CartPages__card">cart</div>
                <div className="CartPages__card">cart</div>
                <div className="CartPages__card">cart</div>
              </div>
              <div className="checkout">
                <h3 className="checkout__total">
                  ${phones.reduce((a, b) => a + b.price, 0)}
                </h3>
                <p className="checkout__count">Total for {phones.length} items</p>
                <div className="checkout__button">Checkout</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
