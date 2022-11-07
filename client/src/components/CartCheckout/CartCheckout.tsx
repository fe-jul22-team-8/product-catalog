import { useContext, useEffect, useMemo, useState } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from './CartCheckout.module.scss';
import { PhonesDataContext } from '../../context/DataContext';
import { ModalContext } from '../..//context/ModalContext';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const CartCheckout = () => {
  const { setCardData, cardData } = useContext(CardContext);
  const data = localStorage.getItem('id');

  const { phonesList } = useContext(PhonesDataContext);
  const { setModalOpen, modalOpen} = useContext(ModalContext);

  const phones = phonesList.filter((phone) => data?.includes(phone.id));

  const totalPrice = phones
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__total}>${totalPrice}</h3>
      <p className={styles.checkout__count}>
        Total for {cardData.length} items
      </p>

      {modalOpen && <ModalWindow setOpenModal={setModalOpen}/>}
      <div className={styles.checkout__button} onClick={() => setModalOpen(true)}>Checkout</div>
    </div>
  );
};
