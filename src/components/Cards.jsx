// Cards.js
import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;


  return  (
    <div className="co" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="cards">
        <div>
          <div className="image_box">
            <img src={img} alt="Image" />
          </div>
          <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}DH</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;