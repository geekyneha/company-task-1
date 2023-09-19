import React from 'react';
import style from '../styles/User.module.css';
import { USER_PROFILE } from '../utils/constants';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const User = () => {
  return (
    <div className={style['user-card']}>
      <div className={style['profile']}>
        <img
          src={USER_PROFILE}
          alt="user"
          className={style['profile-image']}
        />
      </div>
      <h3 className={style['user-name']}>
        Ram Mohan <MdOutlineKeyboardArrowRight fill="#146AFF" />
      </h3>
      <div className={style['user-email']}>rammohan2@gmail.com</div>
    </div>
  );
};

export default User;
