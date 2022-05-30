import React from 'react';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import i18next from 'i18next';
import { ClockCircleOutlined } from '@ant-design/icons';
import { OrderSummaryWrapper } from './styles';

const OrderSummary = ({
  startDate,
  endDate,
  nextBilling,
}) => {
  return (
    <OrderSummaryWrapper>
      <div className="box-time">
        <h3>{i18next.t('orders.orderSummary.startDate')}</h3>
        <div className="time-row">
          <ClockCircleOutlined />
          <p>{moment(startDate).format('DD MMM, YYYY')}</p>
        </div>
      </div>
      <Divider dashed />
      <div className="box-time">
        <h3>{i18next.t('orders.orderSummary.nextBilling')}</h3>
        <div className="time-row">
          <ClockCircleOutlined />
          <p>{moment(nextBilling).format('DD MMM, YYYY')}</p>
        </div>
      </div>
      <Divider dashed />
      <div className="box-time">
        <h3>{i18next.t('orders.orderSummary.endDate')}</h3>
        <div className="time-row">
          <ClockCircleOutlined />
          <p>{moment(endDate).format('DD MMM, YYYY')}</p>
        </div>
      </div>
    </OrderSummaryWrapper>
  );
};

OrderSummary.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  nextBilling: PropTypes.string,
};

export default OrderSummary;
