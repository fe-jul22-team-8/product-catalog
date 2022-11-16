import styles from './ColorSize.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { Card } from '../Card';

import { BASE_URL } from '../../utils/fetchProducts';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';

export const capacities = [
  { id: '1', title: '64GB' },
  { id: '2', title: '256GB' },
  { id: '3', title: '512GB' },
];

export const colors = [
  { id: '1', title: '#FCDBC1' },
  { id: '2', title: '#5F7170' },
  { id: '3', title: '#4C4C4C' },
  { id: '4', title: '#F0F0F0' },
];

export const ColorSize: React.FC = () => {
  const { setCardData, cardData } = useContext(CardContext);
  const [isActiveColor, setIsActiveColor] = useState('1');
  const [isActiveCapacity, setIsActiveCapacity] = useState('1');

  return (
    <>
      <div className={styles.ActionBlock}>
        <div className={styles.ColorBlock}>
          <span className={styles.ActionBlock__option_text}>
            Available Colors
          </span>

          <ul className={styles.ColorBlock__list}>
            {colors.map((color) => (
              <li
                key={color.id}
                onClick={() => setIsActiveColor(color.id)}
                className={
                  isActiveColor === color.id
                    ? styles.ColorBlock__list__item_active
                    : styles.ColorBlock__list__item
                }
              >
                <a
                  className={styles.ColorBlock__list__item__link}
                  style={{ backgroundColor: color.title }}
                ></a>
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
            {capacities.map((capacity) => (
              <li
                key={capacity.id}
                onClick={() => setIsActiveCapacity(capacity.id)}
                className={
                  isActiveCapacity === capacity.id
                    ? styles.CapacityBlock__list__item_active
                    : styles.CapacityBlock__list__item
                }
              >
                <a
                  className={
                    isActiveCapacity === capacity.id
                      ? styles.CapacityBlock__list__item__link_active
                      : styles.CapacityBlock__list__item__link
                  }
                >
                  {capacity.title}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.action_block__underline}></div>
        </div>

        <div className={styles.ActionBlock__underline}></div>
      </div>

      <div className={styles.card}>
        <div className={styles.card_price}>
          <span className={styles.card_newPrice}>$799</span>
          <span className={styles.card_oldPrice}>$1199</span>
        </div>

        <div className={styles.card_buttons}>
          <button className={styles.card_checkout}>Add to card</button>
          <button className={styles.card_wishlist}></button>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Screen</span>
          <span className={styles.card_value}>6.5” OLED</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Resolution</span>
          <span className={styles.card_value}>2688x1242</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>Processor</span>
          <span className={styles.card_value}>Apple A12 Bionic</span>
        </div>

        <div className={styles.card_description}>
          <span className={styles.card_text}>RAM</span>
          <span className={styles.card_value}>3 GB</span>
        </div>
      </div>
    </>
  );
};
