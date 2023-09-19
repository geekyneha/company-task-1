import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import style from '../styles/NotificationButton.module.css';

const NotifiationButton = () => {
  return (
    <>
      <div className={style['btn']}>
        <IoMdNotifications
          size={25}
          fill="#2B7ECA"
        />
        <span className={style['notifications']}>3</span>
      </div>
    </>
  );
};

export default NotifiationButton;
