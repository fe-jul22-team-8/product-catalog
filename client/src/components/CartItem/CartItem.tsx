import styles from './CartItem.module.scss';
import deleteCross from '../../icons/cross.svg';
import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
import { BASE_URL } from '../../utils/fetchProducts';

interface Props {
  name: string;
  img: string;
  price: number;
};

export const CartItem: React.FC<Props> = ({
  name,
  img,
  price,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__delete_button}>
          <img src={deleteCross} className={styles.cartItem__delete_button_img} />
        </div>

        <img src={`${BASE_URL}/${img}`} className={styles.cartItem__img} />

        <p className={styles.cartItem__description}>
          {name}
        </p>
      </div>

      <div className={styles.cartItem__count}>
        <div className={styles.cartItem__count_button}>
          <img src={minus} className={styles.cartItem__count_button_symbol} />
        </div>
        <div className={styles.cartItem__count_number}>
          1
        </div>
        <div className={styles.cartItem__count_button}>
          <img src={plus} className={styles.cartItem__count_button_symbol} />
        </div>
        <div className={styles.cartItem__price}>{price}$</div>
      </div>
    </div>
  )
}
