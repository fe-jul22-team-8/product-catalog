import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from './CartCheckout.module.scss';
import { PhonesDataContext } from '../../context/DataContext';
import { ModalContext } from '../..//context/ModalContext';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import classNames from 'classnames';

export const CartCheckout = () => {
  const { setCardData, cardData, sumOfItems, setSumOfItems } =
    useContext(CardContext);
  const data = localStorage.getItem('id');

  const { phonesList, setPhonesList } = useContext(PhonesDataContext);
  const { setModalOpen, modalOpen } = useContext(ModalContext);

  const phones = phonesList.filter((phone) => data?.includes(phone.id));

  const sum = Object.values(sumOfItems).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    setModalOpen(true);
    localStorage.clear();
    setCardData([]);
    setPhonesList([]);
    setSumOfItems({});
  };

  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__total}>${sum}</h3>
      <p className={styles.checkout__count}>
        Total for {cardData.length} items
      </p>

      {modalOpen && <ModalWindow setOpenModal={setModalOpen} />}
      <button
        className={classNames(styles.checkout__button, {
          [styles.checkout__button_disabled]: cardData.length < 1,
        })}
        onClick={handleCheckout}
        disabled={cardData.length < 1}
      >
        Checkout
      </button>
    </div>
  );
};
