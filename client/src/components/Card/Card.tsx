import './Card.scss';

export const Card = () => (
    <div className="card">
        <img
            src="https://i.imgur.com/yesSOSx.png"
            alt="card-logo"
            className="card_logo"
        />
        <span className='card_title'>
            Apple iPhone Xs 64GB Silver (iMT9G2FSA)
        </span>
        <div className='card_price'>
            <span className='card_newPrice'>
                $500
            </span>
            <span className='card_oldPrice'>
                $800
            </span>
        </div>
        <div className='card_description'>
            <span className='card_text'>
                Screen
            </span>
            <span className='card_value'>
                5.8" OLED
            </span>
        </div>
        <div className='card_description'>
            <span className='card_text'>
                Capacity
            </span>
            <span className='card_value'>
                128 GB
            </span>
        </div>
        <div className='card_description'>
            <span className='card_text'>
                RAM
            </span>
            <span className='card_value'>
                4GB
            </span>
        </div>
        <div className='card_buttons'>
            <button className='card_checkout'>
                Add to cart
            </button>
            <button className='card_wishlist'>
                
            </button>
        </div>


    </div>
);
