import './CartItem.scss';
const deleteCross = require('../../icons/cross-to-cartItem.png');
const cartItemImg = require('../../icons/cartItem-img.png');
const plus = require('../../icons/cartItem-plus.png');
const minus = require('../../icons/cartItem-minus.png');

export function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartItem__info">
        <div className="cartItem__delete-button">
          <img src={deleteCross} className="cartItem__delete-button-img" />
        </div>

        <img src={cartItemImg} className="cartItem__img" />

        <p className="cartItem__description">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>

      <div className="cartItem__count">
        <div className="cartItem__count-button">
          <img src={minus} className="cartItem__count-button-symbol" />
        </div>
        <div className="cartItem__count-number">
          1
        </div>
        <div className="cartItem__count-button">
          <img src={plus} className="cartItem__count-button-symbol" />
        </div>
      </div>

      <div className="cartItem__price">999$</div>
    </div>
  )
}