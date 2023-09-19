import React from 'react';
import style from '../styles/Menu.module.css';
import { navigations } from '../utils/mock';

const Menu = () => {
  return (
    <div className={style['navigation-bar']}>
      {navigations.map((option) => (
        <div
          className={style['options']}
          key={option.id}
        >
          <div>
            <img
              src={option.icon}
              alt="icon"
              className={style['icon']}
            />
          </div>
          <div className={style['nav-name']}>{option.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
