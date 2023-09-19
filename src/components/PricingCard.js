import React from 'react';
import style from '../styles/PricingCard.module.css';
import Button from './Button';
import { Benefits } from './Benefits';
import { pricingCard } from '../utils/mock';
import { FaPlay } from 'react-icons/fa';

const PricingCard = () => {
  return (
    <div className={style['cards']}>
      {/* mapping card */}
      {pricingCard.map((card) => (
        <div
          className={style['card']}
          key={card.id}
        >
          <div className={style['plan-detail']}>
            <div className={style['plan-name']}>{card.plan}</div>
            <div className={style['discounted-price']}>{card.discount}</div>
            <div className={style['plan-price']}>
              {card.price}
              <span className={style['light']}>/mo</span>
            </div>

            {/* button  */}
            <Button
              color={card.btnBg}
              name={'Get Started'}
            />
            <hr />
          </div>
          <div className={style['plan-description']}>
            {/* Benifits */}
            <Benefits features={card.features} />
            <div className={style['explore-feature']}>
              <span className={style['link']}>Explore Features</span>
              <span className={style['icon']}>
                <FaPlay
                  fill={card.btnBg}
                  size={13}
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
