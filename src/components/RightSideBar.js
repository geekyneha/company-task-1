import React from 'react';
import style from '../styles/RightSideBard.module.css';
import NotifiationButton from './NotifiationButton';
import { CgMathPlus } from 'react-icons/cg';

const RightSideBar = () => {
  return (
    <aside className={style['side-bar']}>
      {/* button */}
      <div>
        <NotifiationButton />
      </div>

      {/* options and add feature */}
      <div>
        <div className={style['options']}></div>
        <div className={style['add-btn']}>
          <CgMathPlus
            size={25}
            fill="#AF35C4"
          />
        </div>
      </div>
    </aside>
  );
};

export default RightSideBar;
