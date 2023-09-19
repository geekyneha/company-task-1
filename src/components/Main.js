import React from 'react';
import PricingCard from './PricingCard';
import SubscriptionCard from './SubscriptionCard';
import style from '../styles/Main.module.css';

const Main = () => {
  return (
    <main>
      <h1 className={style['heading']}>
        Choose a plan that's just right for you!
      </h1>
      <PricingCard />
      <SubscriptionCard />
      <div className={style['text']}>
        <div></div>
        <div className={style['small-text']}>
          *some unique features are provided as add-ons with individual plans
          for each features
        </div>
      </div>
    </main>
  );
};

export default Main;
