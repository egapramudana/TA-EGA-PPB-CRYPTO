import React, { useEffect, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import './Header.css';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const simulateLoading = async () => {
      try {
        console.log('Start loading simulation');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Sesuaikan durasi timeout
        console.log('Loading simulation complete');
        if (isMounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error during loading simulation:', error);
      }
    };

    simulateLoading();

    // Cleanup function
    return () => {
      isMounted = false; // Set isMounted ke false saat komponen dilepas dari DOM
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1a202c',
        color: '#fff',
        fontSize: '24px',
        fontFamily: 'Helvetica',
      }}
    >
      <div className='header'>
        <FaBitcoin className='icon' />
        <h1>
          {' '}
          Coin<span className='purple'>KU</span>
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
