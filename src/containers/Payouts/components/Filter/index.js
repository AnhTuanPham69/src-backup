import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const { RangePicker } = DatePicker;

const Filter = (props)=> (
  <Row {...props} gutter={14}>
    <Col md={12} sm={12} xs={24}>
      <RestInputItem
        source="businessName.$like"
        placeholder="payouts.placeholder.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={12} sm={12} xs={24}>
      <RestInputItem
        source="lastedPaymentDate"
        rangerPickerPlaceholder={["payouts.placeholder.startDate","payouts.placeholder.endDate"]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
  </Row>
);

Filter.propTypes = {
};

export default Filter;
