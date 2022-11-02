import './CartPages.scss';
import arrow from '../icons/arrowRight.svg';
export const CartPages = () => {
  return (
    <>
      <div className="title">
        <div className="title__navigation">
          <img src={arrow} alt="arrow" className="title__arrow" />
          <p className="title__arrowText">Phones</p>
        </div>
        <h1 className="title__headline">Cart</h1>
      </div>
      <div className="CartPages">
        <section className="CartPages__wrapper">
          <div className="CartPages__card-wrapper">
            <div className="CartPages__card">cart</div>
            <div className="CartPages__card">cart</div>
            <div className="CartPages__card">cart</div>
            <div className="CartPages__card">cart</div>
          </div>
          <div className="CartPages__cost-wrapper">cost</div>
        </section>
      </div>
    </>
  );
};
