import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const { RangePicker } = DatePicker;

const PayoutsFilter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={24} sm={24} xs={24}>
      <RestInputItem
        source="paymentDate"
        rangerPickerPlaceholder={[
          'orders.placeholder.startDate',
          'orders.placeholder.endDate',
        ]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
  </Row>
);

PayoutsFilter.propTypes = {};

export default PayoutsFilter;
