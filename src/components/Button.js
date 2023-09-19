import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import style from '../styles/Button.module.css';

const Button = ({ color, name }) => {
  return (
    <div>
      <div
        className={style['btn']}
        style={{ backgroundColor: color }}
      >
        <div>{name} </div>
        <div>
          <CgArrowLongRight className={style['arrow-icon']} />
        </div>
      </div>
    </div>
  );
};

export default Button;
