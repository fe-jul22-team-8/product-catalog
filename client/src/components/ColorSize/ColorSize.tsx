import styles from './ColorSize.module.scss';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardContext } from '../../context/CardContext';
import classNames from 'classnames';
import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone | undefined;
}

export const ColorSize: React.FC<Props> = ({ phone }) => {
  const { setCardData, cardData, setFavouriteList, favouriteList } =
    useContext(CardContext);

  const currentColor = phone?.color;
  const currentCapacity = phone?.capacity;

  const currentId = phone ? phone.id : '1';

  const isCardInArray = cardData.includes(currentId);
  const isFavouriteArray = favouriteList.includes(currentId);

  const handleSetCardInData = () => {
    if (!isCardInArray) {
      setCardData([...cardData, currentId]);
    } else {
      setCardData((current) => current.filter((id) => id !== currentId));
    }
  };

  const handleSetItemInFavourite = () => {
    if (!isFavouriteArray) {
      setFavouriteList((oldState) => [...oldState, currentId]);
    } else {
      setFavouriteList((current) => current.filter((id) => id !== currentId));
    }
  };

  const [isActiveColor = currentColor, setIsActiveColor] =
    useState(currentColor);

  const [isActiveCapacity = currentCapacity, setIsActiveCapacity] =
    useState(currentCapacity);

  const colorsAvailable = phone?.colorsAvailable;
  const capacityAvailable = phone?.capacityAvailable;

  return (
    <div className={styles.ActionBlock}>
      <div className={styles.ColorBlock}>
        <p className={styles.ActionBlock__option_text}>Available Colors</p>

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
                to={`../${phone?.namespaceId
                  }-${isActiveCapacity?.toLowerCase()}-${color}`}
                className={styles.ColorBlock__list__item__link}
                style={{ backgroundColor: color }}
              ></Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.ActionBlock__underline}></div>

      <div className={styles.CapacityBlock}>
        <span className={styles.ActionBlock__option_text}>Select capacity</span>

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
                to={`../${phone?.namespaceId
                  }-${capacity.toLowerCase()}-${isActiveColor}`}
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

      <div className={styles.characteristic}>
        <div className={styles.characteristic__price}>
          <span
            className={styles.characteristic__newPrice}
          >{`$${phone?.price}`}</span>
          <span
            className={styles.characteristic__oldPrice}
          >{`$${phone?.fullPrice}`}</span>
        </div>

        <div className={styles.characteristic__buttons}>
          <button
            className={classNames(styles.characteristic__checkout, {
              [styles.characteristic__uncheckout]: isCardInArray,
            })}
            onClick={handleSetCardInData}
          >
            {isCardInArray ? 'Added' : 'Add to cart'}
          </button>
          <button
            className={classNames(styles.characteristic__wishlist, {
              [styles.characteristic__wishlist_heart]: isFavouriteArray,
            })}
            onClick={handleSetItemInFavourite}
          ></button>
        </div>

        <div className={styles.characteristic__description}>
          <span className={styles.characteristic__text}>Screen</span>
          <span className={styles.characteristic__value}>{phone?.screen}</span>
        </div>

        <div className={styles.characteristic__description}>
          <span className={styles.characteristic__text}>Resolution</span>
          <span className={styles.characteristic__value}>
            {phone?.resolution}
          </span>
        </div>

        <div className={styles.characteristic__description}>
          <span className={styles.characteristic__text}>Processor</span>
          <span className={styles.characteristic__value}>
            {phone?.processor}
          </span>
        </div>

        <div className={styles.characteristic__description}>
          <span className={styles.characteristic__text}>RAM</span>
          <span className={styles.characteristic__value}>{phone?.ram}</span>
        </div>
      </div>
    </div>
  );
};
