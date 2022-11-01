import './Card.scss';

interface Props {
  name: string,
  price:number,
  fullPrice:number,
  capacity:string,
  ram:string,
  screen:string,
}

export const Card: React.FC<Props> = ({
  name,
  price,
  fullPrice,
  capacity,
  ram,
  screen,
}) => {
  console.log('hello')
  return (
    <div className="card">
      <img
        src="https://i.imgur.com/yesSOSx.png"
        alt="card-logo"
        className="card_logo"
      />
      <span className="card_title">{name} (iMT9G2FSA)</span>
      <div className="card_price">
        <span className="card_newPrice">${price}</span>
        <span className="card_oldPrice">${fullPrice}</span>
      </div>
      <div className="card_description">
        <span className="card_text">Screen</span>
        <span className="card_value">{screen}</span>
      </div>
      <div className="card_description">
        <span className="card_text">Capacity</span>
        <span className="card_value">{capacity}</span>
      </div>
      <div className="card_description">
        <span className="card_text">RAM</span>
        <span className="card_value">{ram}</span>
      </div>
      <div className="card_buttons">
        <button className="card_checkout">Add to cart</button>
        <button className="card_wishlist"></button>
      </div>
    </div>
  )
};
