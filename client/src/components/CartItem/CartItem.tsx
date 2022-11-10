import styles from './CartItem.module.scss';
import deleteCross from '../../icons/cross.svg';
import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
import { BASE_URL } from '../../utils/fetchProducts';
import { useContext, Dispatch, SetStateAction, useEffect } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { Phone } from '@/types/Phone';
import { Sum } from '@/context/CardContext';
import classNames from 'classnames';

interface Props {
  name: string;
  img: string;
  price: number;
  keyItem: string;
  setCartList: Dispatch<SetStateAction<Phone[]>>,
  setCardData: Dispatch<SetStateAction<string[]>>,
  setPhonesList: Dispatch<SetStateAction<Phone[]>>,
  setSumOfItems: Dispatch<SetStateAction<Sum>>,
  sumOfItems: Sum,
  cardData: string[],
}


export const CartItem: React.FC<Props> = ({ name, img, price, keyItem, setCartList, setCardData, setPhonesList, cardData, setSumOfItems, sumOfItems }) => {

  const goods = JSON.parse(localStorage.getItem('id') || '{}');

  const count = cardData.filter(item => item === keyItem).length;

  useEffect(() => {
    setSumOfItems(oldState => ({...oldState, [keyItem]: price * count}));
  }, []);

  const handleRemoveItem = () => {
    goods.splice(goods.indexOf(keyItem), 1);
    localStorage.setItem('id', JSON.stringify(goods));
    setCartList(oldState => oldState.filter(phone => phone.id !== keyItem));
    setCardData(oldState => oldState.filter(phone => phone !== keyItem));
    setPhonesList(oldState => oldState.filter(phone => phone.id !== keyItem));
    setSumOfItems(oldState => ({...oldState, [keyItem]: 0}));
  }

  const handleCountUp = () => {
    setSumOfItems(oldState => ({...oldState, [keyItem]: price * (count + 1)}));
    setCardData(oldState => [...oldState, keyItem]);
  }

  const handleCountDown = () => {
    setSumOfItems(oldState => ({...oldState, [keyItem]: price * (count - 1)}));
    const index = cardData.indexOf(keyItem);
    if (index > -1) {
      const copy = [...cardData];
      copy.splice(index, 1);
      setCardData(copy);
    }
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__delete_button}>
          <img
            onClick={handleRemoveItem}
            src={deleteCross}
            className={styles.cartItem__delete_button_img}
          />
        </div>

        <img src={`${BASE_URL}/${img}`} className={styles.cartItem__img} />

        <p className={styles.cartItem__description}>{name}</p>
      </div>

      <div className={styles.cartItem__count}>
        <button 
        className={classNames(styles.cartItem__count_button, {
          [styles.cartItem__count_button_disabled]: count < 1,
        })} 
        onClick={handleCountDown} 
        disabled={count < 1}>
          <img src={minus} className={styles.cartItem__count_button_symbol} />
        </button>
        <div className={styles.cartItem__count_number}>{count}</div>
        <button className={styles.cartItem__count_button} onClick={handleCountUp}>
          <img src={plus} className={styles.cartItem__count_button_symbol} />
        </button>
        <div className={styles.cartItem__price}>{count * price}$</div>
      </div>
    </div>
  );
};
