import React from 'react';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="name.$like"
        placeholder="serviceTypes.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={16} sm={16} xs={24} />
  </Row>
);

Filter.propTypes = {};

export default Filter;
