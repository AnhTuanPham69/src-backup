import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getPayoutDashboard } from '@redux/payouts/actions';
import { getByIdBusinesses } from '@redux/businesses/actions';
import { convertParamsToObject } from 'utils/url';
import Create from '../../rest/Create';
import Form from '../components/Form';

const PayoutsCreate = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { businessId } = convertParamsToObject(
    decodeURIComponent(location.hash),
  );
  return (
    <Create
      {...props}
      resource="payouts"
      createText="payouts.payBtn"
      defaultOptions={{
        onSuccess: () => {
          if (businessId) {
            dispatch(
              getByIdBusinesses({
                data: {
                  id: businessId?.substring(1, businessId.length - 1),
                },
              }),
            );
          } else dispatch(getPayoutDashboard());
        },
      }}
      formatOnSubmit={({ totalBalance, ...values }) => {
        return {
          ...values,
          paymentDate: new Date().toISOString(),
        };
      }}
    >
      <Form isBusiness={!!businessId} />
    </Create>
  );
};

PayoutsCreate.propTypes = {};

export default PayoutsCreate;
