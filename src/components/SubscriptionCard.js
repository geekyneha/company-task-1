import React from 'react';
import style from '../styles/SubscriptionCard.module.css';
import Button from './Button';
import { Benefits } from './Benefits';
import { subscriptionCard } from '../utils/mock';

const SubscriptionCard = () => {
  return (
    <div className={style['all-cards']}>
        {/* mapping cards (powerd by data from mock) */}
      {subscriptionCard.map((card) => (
        <div
          className={style['card']}
          key={card.id}
        >
          <div className={style['detail']}>
            <div
              className={style['btn']}
              style={{ backgroundColor: card.btnBg }}
            >
              {card.smallBtn}
            </div>
            <h2 className={style['plan-name']}>{card.plan}</h2>
            <p>{card.text}</p>
            <Button
              name={card.btnText}
              color={card.btnBg}
            />
          </div>
          <div className={style['benefit']}>
            <Benefits features={card.features} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCard;
