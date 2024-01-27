import React, { createContext, useState, useContext } from 'react';

export const ConfirmContext = createContext();

const ConfirmProvider = ({ children }) => {
  const [wasteData, setWasteData] = useState({});
  const [totalCoins, setTotalCoins] = useState(0);

  const updateTotalCoins = (weight, coinsPerKg) => {
    const coins = parseFloat(weight) * coinsPerKg;
    setTotalCoins((prevTotalCoins) => prevTotalCoins + coins);
  };

  return (
    <ConfirmContext.Provider value={{ wasteData, setWasteData, totalCoins, updateTotalCoins }}>
      {children}
    </ConfirmContext.Provider>
  );
};

const useConfirmContext = () => useContext(ConfirmContext);

export { ConfirmProvider, useConfirmContext };