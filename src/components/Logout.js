import React from 'react';
import { PiPowerBold } from 'react-icons/pi';
import style from '../styles/Logout.module.css';

const Logout = () => {
  return (
    <button className={style['logout-btn']}>
      Logout <PiPowerBold />
    </button>
  );
};

export default Logout;
