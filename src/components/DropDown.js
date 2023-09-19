import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import style from '../styles/DropDown.module.css';

const DropDown = () => {
  return (
    <div className={style['btn']}>
      <MdOutlineKeyboardArrowDown size={25} className={style['down-icon']} />
    </div>
  );
};

export default DropDown;
