import styles from './Card.module.scss';
import { BASE_URL } from '../../utils/fetchProducts';

interface Props {
  name: string;
  price: number;
  fullPrice: number;
  capacity: string;
  ram: string;
  screen: string;
  image: string;
}

export const Card: React.FC<Props> = ({
  name,
  price,
  fullPrice,
  capacity,
  ram,
  screen,
  image,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={`${BASE_URL}/${image}`}
        alt="card-logo"
        className={styles.card_logo}
      />
      <span className={styles.card_title}>{name} (iMT9G2FSA)</span>
      <div className={styles.card_price}>
        <span className={styles.card_newPrice}>${price}</span>
        <span className={styles.card_oldPrice}>${fullPrice}</span>
      </div>
      <div className={styles.card_description}>
        <span className={styles.card_text}>Screen</span>
        <span className={styles.card_value}>{screen}</span>
      </div>
      <div className={styles.card_description}>
        <span className={styles.card_text}>Capacity</span>
        <span className={styles.card_value}>{capacity}</span>
      </div>
      <div className={styles.card_description}>
        <span className={styles.card_text}>RAM</span>
        <span className={styles.card_value}>{ram}</span>
      </div>
      <div className={styles.card_buttons}>
        <button className={styles.card_checkout}>Add to cart</button>
        <button className={styles.card_wishlist}></button>
      </div>
    </div>
  );
};
