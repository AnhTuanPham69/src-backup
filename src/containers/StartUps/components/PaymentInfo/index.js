import React, { useMemo } from 'react';
import SVGIcon from 'components/common/SVGIcon';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { formatBillingStatus } from 'utils/formatFieldUtils';
import { Spin } from 'antd';
import moment from 'moment';
import { PaymentInfoWrapper } from './styles';

// const BILLING_STATUS = [
//   {
//     id: 1,
//     value: 'SUCCESS',
//     text: 'Success',
//     color: '#DEFFEE',
//     textColor: '#36BF57',
//   },
//   {
//     id: 2,
//     value: 'FAILED',
//     text: 'Failed',
//     color: '#FFEEF1',
//     textColor: '#F16063',
//   },
//   {
//     id: 3,
//     value: 'IN_PROGRESS',
//     text: 'In Progress',
//     color: '#E1E8FF',
//     textColor: '#4C6FFF',
//   },
//   {
//     id: 4,
//     value: 'COMPLETED',
//     text: 'Completed',
//     color: '#DEFFEE',
//     textColor: '#36BF57',
//   },
//   {
//     id: 5,
//     value: 'CANCELLED',
//     text: 'Cancel',
//     color: '#FFEEF1',
//     textColor: '#F16063',
//   },
//   {
//     id: 6,
//     value: 'PENDING',
//     text: 'Pending',
//     color: '#FFEDE3',
//     textColor: '#F5A303',
//   },
//   {
//     id: 7,
//     value: 'ERROR',
//     text: 'Error',
//     color: '#FFEEF1',
//     textColor: '#f54242',
//   },
// ];

const PaymentInfo = ({
  monthlyPayment,
  phaseName,
  status,
  firstPayment,
  finalPayment,
  nextBilling,
  unit,
  totalMonth,
  loading,
}) => {
  const billingStatus = useMemo(() => formatBillingStatus(status), [status]);

  return (
    <PaymentInfoWrapper>
      {loading ? (
        <Spin />
      ) : (
        <>
          <div>
            <div className="payment-type">
              <h3>{i18next.t('startUps.advancedInfo.monthlyPayment')}</h3>
              {billingStatus}
            </div>
            <div>
              <SVGIcon type="compass" />
              <p>{phaseName || ''}</p>
            </div>
            <div>
              <SVGIcon type="dollar" />
              <p>
                {i18next.t('startUps.advancedInfo.monthlyPrice', {
                  monthlyPrice: monthlyPayment,
                  unit: unit && unit.toLowerCase(),
                  duration: totalMonth,
                })}
              </p>
            </div>
          </div>
          <div>
            <h3>{i18next.t('startUps.advancedInfo.firstPayment')}</h3>
            <div>
              <SVGIcon type="clock" />
              <p>
                {firstPayment
                  ? moment(firstPayment).format('MMMM Do YYYY, h:mm:ss a')
                  : 'N/A'}
              </p>
            </div>
          </div>
          <div>
            <h3>{i18next.t('startUps.advancedInfo.nextPayment')}</h3>
            <div>
              <SVGIcon type="clock" />
              <p>
                {nextBilling
                  ? moment(nextBilling).format('MMMM Do YYYY, h:mm:ss a')
                  : 'N/A'}
              </p>
            </div>
          </div>
          <div>
            <h3>{i18next.t('startUps.advancedInfo.finalPayment')}</h3>
            <div>
              <SVGIcon type="clock" />
              <p>
                {finalPayment
                  ? moment(finalPayment).format('MMMM Do YYYY, h:mm:ss a')
                  : 'N/A'}
              </p>
            </div>
          </div>
        </>
      )}
    </PaymentInfoWrapper>
  );
};

PaymentInfo.propTypes = {
  monthlyPayment: PropTypes.number,
  phaseName: PropTypes.string,
  status: PropTypes.string,
  firstPayment: PropTypes.string,
  finalPayment: PropTypes.string,
  nextBilling: PropTypes.string,
  unit: PropTypes.number,
  totalMonth: PropTypes.number,
  loading: PropTypes.bool,
};

export default PaymentInfo;
