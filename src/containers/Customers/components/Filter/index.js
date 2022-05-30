import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const { RangePicker } = DatePicker;

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="customerName"
        placeholder="customers.placeholder.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    {/* <Col md={8} sm={8} xs={24}>
      <RestSelect
        source="status.$eq"
        placeholder="customers.placeholder.status"
        resourceData={USER_PROGRAM_STATUS}
      />
    </Col> */}
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="account"
        placeholder="customers.placeholder.email"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="createdAt"
        rangerPickerPlaceholder={[
          'customers.placeholder.startDate',
          'customers.placeholder.endDate',
        ]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;
