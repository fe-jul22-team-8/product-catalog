import { Phone } from '../../types/Phone';
import './Card.scss';

interface Props {
  phonesList: Phone[];
}

export const Card: React.FC<Props> = ({ phonesList }) => {
  const phone = phonesList[0];
  return (
    <div className="card">
      <img
        src="https://i.imgur.com/yesSOSx.png"
        alt="card-logo"
        className="card_logo"
      />
      <span className="card_title">{phone.name} (iMT9G2FSA)</span>
      <div className="card_price">
        <span className="card_newPrice">${phone.price}</span>
        <span className="card_oldPrice">${phone.fullPrice}</span>
      </div>
      <div className="card_description">
        <span className="card_text">Screen</span>
        <span className="card_value">{phone.screen}</span>
      </div>
      <div className="card_description">
        <span className="card_text">Capacity</span>
        <span className="card_value">{phone.capacity}</span>
      </div>
      <div className="card_description">
        <span className="card_text">RAM</span>
        <span className="card_value">{phone.ram}</span>
      </div>
      <div className="card_buttons">
        <button className="card_checkout">Add to cart</button>
        <button className="card_wishlist"></button>
      </div>
    </div>
  );
};
