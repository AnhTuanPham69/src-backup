import React from 'react';
import { useParams } from 'react-router';
import SubscriptionPlanList from 'containers/SubscriptionPlans/List';

const SubscriptionPlan = () => {
  const { id } = useParams();

  return(
    <SubscriptionPlanList 
      ExtraHeaderActions={null}
      noCardWrapper
      filter={null}
      businessId={id}
    />
  )
};

export default SubscriptionPlan;