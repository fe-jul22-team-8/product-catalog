import styles from './CartItem.module.scss';
import deleteCross from '../../icons/cross-to-cartItem.png';
import plus from '../../icons/cartItem-plus.svg';
import minus from '../../icons/cartItem-minus.svg';

export function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__delete_button}>
          <img src={deleteCross} className={styles.cartItem__delete_button_img} />
        </div>

        <img src='https://i.imgur.com/yesSOSx.png' className={styles.cartItem__img} />

        <p className={styles.cartItem__description}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
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
      </div>

      <div className={styles.cartItem__price}>999$</div>
    </div>
  )
}