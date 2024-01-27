import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import coinsImage from './coin.png';  // Import the image
import './Coins.css';

const Coins = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 1000 ? 1 : prevCount + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Sidebar>
      <div className="coins-container">
        <img src={coinsImage} alt="Coins" className="coins-image" />
        <h1 className="coins-counter">{count}</h1>
      </div>
      <h2 className="text-black">Unlock the treasures hidden in your waste. These coins are waiting to be yours. Don't miss out—start your journey to wealth and sustainability today!</h2>
    </Sidebar>
  );
};

export default Coins;
