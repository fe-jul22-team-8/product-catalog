import styles from './CartItem.module.scss';
import deleteCross from '../../icons/cross.svg';
import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
import { BASE_URL } from '../../utils/fetchProducts';
import { useContext, Dispatch, SetStateAction } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { Phone } from '@/types/Phone';

interface Props {
  name: string;
  img: string;
  price: number;
  keyItem: string;
  setCartList: Dispatch<SetStateAction<Phone[]>>,
  setCardData: Dispatch<SetStateAction<string[]>>,
  setPhonesList: Dispatch<SetStateAction<Phone[]>>,
}


export const CartItem: React.FC<Props> = ({ name, img, price, keyItem, setCartList, setCardData, setPhonesList }) => {

  const goods = JSON.parse(localStorage.getItem('id') || '{}');

  const handleRemoveItem = () => {
    goods.splice(goods.indexOf(keyItem), 1);
    localStorage.setItem('id', JSON.stringify(goods));
    setCartList(oldState => oldState.filter(phone => phone.id !== keyItem));
    setCardData(oldState => oldState.filter(phone => phone !== keyItem));
    setPhonesList(oldState => oldState.filter(phone => phone.id !== keyItem));
    
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
        <div className={styles.cartItem__count_button}>
          <img src={minus} className={styles.cartItem__count_button_symbol} />
        </div>
        <div className={styles.cartItem__count_number}>1</div>
        <div className={styles.cartItem__count_button}>
          <img src={plus} className={styles.cartItem__count_button_symbol} />
        </div>
        <div className={styles.cartItem__price}>{price}$</div>
      </div>
    </div>
  );
};
