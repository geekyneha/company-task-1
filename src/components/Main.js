import React from 'react';
import PricingCard from './PricingCard';
import SubscriptionCard from './SubscriptionCard';

const Main = () => {
  return (
    <main>
      <h1>Choose a plan that's just right for you!</h1>
      <PricingCard />
      <SubscriptionCard />
    </main>
  );
};

export default Main;
