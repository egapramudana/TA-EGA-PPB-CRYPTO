import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/CoinDetail';
import Header from './components/Header';
import Profil from './routes/Profil';  
import BottomNavBar from "./routes/BottomNavbar";
import SplashScreen from './components/Splashscreen';
import About from './routes/About';
import TradingWebsites from './routes/TradingWebsites';

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCoins(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Coins coins={coins} />} />
            <Route exact path="/Profil" element={<Profil />} />
            <Route path='/trading-websites' element={<TradingWebsites />} /> 
            <Route exact path="/About" element={<About />} />
            <Route path='/coin' element={<Coin />}>
              <Route path=':coinId' element={<Coin />} />
            </Route>
          </Routes>
          <BottomNavBar/>
        </>
      )}
    </>
  );
}

export default App;
