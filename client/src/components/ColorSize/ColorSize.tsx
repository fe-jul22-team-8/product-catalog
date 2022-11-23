import styles from './ColorSize.module.scss';
import { useState } from 'react';
import { PhonesDataContext } from '../../context/DataContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// export const existedColors = [
//   { id: '1', title: 'black', value: '#000' },
//   { id: '2', title: 'rosegold', value: '#E0BFB8' },
//   { id: '3', title: 'gold', value: '#FFD700' },
//   { id: '4', title: 'silver', value: '#C0C0C0' },
//   { id: '5', title: 'spacegray', value: '#383637' },
//   { id: '6', title: 'green', value: '#008000' },
//   { id: '7', title: 'yellow', value: '#FFFF00' },
//   { id: '8', title: 'white', value: '#FFF' },
//   { id: '9', title: 'purple', value: '#800080' },
//   { id: '10', title: 'red', value: '#FF0000' },
//   { id: '11', title: 'midnight', value: '#3D473F' },
//   { id: '12', title: 'coral', value: '#FF7F50' },
// ];

export const ColorSize: React.FC = () => {
  const { phoneId } = useParams();
  const { phonesList } = useContext(PhonesDataContext);
  const currentPhone = phonesList.find((phone) => phone.phoneId === phoneId);
  const currentColor = currentPhone?.color
  const currentCapacity = currentPhone?.capacity
  const [isActiveColor=currentColor, setIsActiveColor] = useState(currentColor);
  const [isActiveCapacity=currentCapacity, setIsActiveCapacity] = useState(currentCapacity);
  
  const colorsAvailable = currentPhone?.colorsAvailable;
  const capacityAvailable = currentPhone?.capacityAvailable

  return (
    <>
      <div className={styles.ActionBlock}>
        <div className={styles.ColorBlock}>
          <span className={styles.ActionBlock__option_text}>
            Available Colors
          </span>

          <ul className={styles.ColorBlock__list}>
            {colorsAvailable?.map((color) => (
              <li
                key={color}
                onClick={() => setIsActiveColor(color)}
                className={
                  isActiveColor === color
                    ? styles.ColorBlock__list__item_active
                    : styles.ColorBlock__list__item
                }
              >
                <Link
                  to={`../${currentPhone?.namespaceId}-${isActiveCapacity?.toLowerCase()}-${color}`}
                  className={styles.ColorBlock__list__item__link}
                  style={{ backgroundColor: color }}
                ></Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.ActionBlock__underline}></div>

        <div className={styles.CapacityBlock}>
          <span className={styles.ActionBlock__option_text}>
            Select capacity
          </span>

          <ul className={styles.CapacityBlock__list}>
            {capacityAvailable?.map((capacity) => (
              <li
                key={capacity}
                onClick={() => setIsActiveCapacity(capacity)}
                className={
                  isActiveCapacity === capacity
                    ? styles.CapacityBlock__list__item_active
                    : styles.CapacityBlock__list__item
                }
              >
                <Link
                  to={`../${currentPhone?.namespaceId}-${capacity.toLowerCase()}-${isActiveColor}`}
                  className={
                    isActiveCapacity === capacity
                      ? styles.CapacityBlock__list__item__link_active
                      : styles.CapacityBlock__list__item__link
                  }
                >
                  {capacity}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.action_block__underline}></div>
        </div>

        <div className={styles.ActionBlock__underline}></div>
      </div>

      <div className={styles.card}>
        <div className={styles.card_price}>
          <span className={styles.card_newPrice}>{`$${currentPhone?.price}`}</span>
          <span className={styles.card_oldPrice}>{`$${currentPhone?.fullPrice}`}</span>
        </div>

        <div className={styles.card_buttons}>
          <button className={styles.card_checkout}>Add to card</button>
          <button className={styles.card_wishlist}></button>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Screen</span>
          <span className={styles.card_value}>{currentPhone?.screen}</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Resolution</span>
          <span className={styles.card_value}>{currentPhone?.resolution}</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Processor</span>
          <span className={styles.card_value}>{currentPhone?.processor}</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>RAM</span>
          <span className={styles.card_value}>{currentPhone?.ram}</span>
        </div>
      </div>
    </>
  );
};
