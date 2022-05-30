import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { BILLING_STATUS } from 'configs/localData';
import PropTypes from 'prop-types';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';

const { RangePicker } = DatePicker;

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="transactionId.$like"
        placeholder="orders.placeholder.orderId"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="outerFilter.q"
        placeholder="orders.placeholder.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source={`${props?.isDashboard ? 'updatedAt' : 'createdAt'}`}
        rangerPickerPlaceholder={[
          'orders.placeholder.startDate',
          'orders.placeholder.endDate',
        ]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestSelect
        source="status.$eq"
        placeholder="orders.status"
        resourceData={BILLING_STATUS}
      />
    </Col>
  </Row>
);

Filter.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Filter;
