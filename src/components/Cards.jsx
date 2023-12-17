// Cards.js
import React, { useEffect, useState, useRef } from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const distanceToTop = cardRef.current.getBoundingClientRect().top;
      setIsVisible(distanceToTop < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`cards ${isVisible ? 'visible' : ''}`} ref={cardRef}>
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
  );
};

export default Cards;
