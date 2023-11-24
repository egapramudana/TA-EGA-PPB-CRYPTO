// BottomNavBar.js
import React from 'react';
import { BsHouseDoor, BsPerson, BsInfoCircle, BsBarChart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const NavigationContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#171303',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: '10px',
};

const BottomNavBar = () => {
  return (
    <div style={NavigationContainer}>
      <Link to="/" className="nav-link">
        <BsHouseDoor />
      </Link>
      <Link to="/trading-websites" className="nav-link">
        <BsBarChart />
      </Link>
      <Link to="/About" className="nav-link">
        <BsInfoCircle />
      </Link>
      <Link to="/Profil" className="nav-link">
        <BsPerson />
      </Link>
    </div>
  );
};

export default BottomNavBar;
