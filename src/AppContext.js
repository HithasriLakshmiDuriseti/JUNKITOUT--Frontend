import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [plasticData, setPlasticData] = useState({});
  const [paperData, setPaperData] = useState({});
  const [clothesData, setClothesData] = useState({});
  const [ewasteData, setEwasteData] = useState({});
  const [woodData, setWoodData] = useState({});

  return (
    <AppContext.Provider value={{ plasticData, setPlasticData, paperData, setPaperData ,clothesData, setClothesData,ewasteData, setEwasteData,woodData, setWoodData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);