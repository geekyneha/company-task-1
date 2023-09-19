import React from 'react';
import style from '../styles/Benefilts.module.css';

export const Benefits = ({ features }) => {
  return (
    <div>
      <p className={style['text']}>What you'll get:</p>

      {features.map((feature) => (
        <div className={style['benefit']}>
          <div>{feature.icon}</div> <div> {feature.benefit}</div>
        </div>
      ))}
    </div>
  );
};
