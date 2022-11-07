import styles from './Card.module.scss';
import { BASE_URL } from '../../utils/fetchProducts';
import { useContext } from 'react';
import { CardContext, CardProvider } from '../../context/CardContext';
import { Phone } from '../../types/Phone';
import classNames from 'classnames';

interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
  const { setCardData, cardData } = useContext(CardContext);
//@ts-ignore
  const isCardInArray = cardData.includes(phone.id);

  const handleSetCardInData = () => {
    if (!isCardInArray) {
      //@ts-ignore
      setCardData([...cardData, phone.id]);
    } else {
        //@ts-ignore
      setCardData((current) => [...current].filter((id) => id !== phone.id));
    }
  };
  const { name, price, fullPrice, capacity, ram, screen, image } = phone;
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
        <button
          className={classNames(styles.card_checkout, {
            [styles.card_uncheckout]: isCardInArray,
          })}
          onClick={handleSetCardInData}
        >
          {isCardInArray ? 'Added' : 'Add to cart'}
        </button>
        <button className={styles.card_wishlist}></button>
      </div>
    </div>
  );
};
