import React from 'react';
import { Row, Col } from 'antd';
import { ACTIVE_TYPES } from 'configs/localData';
import { SearchOutlined } from '@ant-design/icons';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import RestSelect from '../../../../components/RestInput/RestSelect';

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="name.$like"
        placeholder="serviceTypes.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={8} sm={8} xs={24}>
      <RestSelect
        source="isActive.$eq"
        placeholder="programs.isActive"
        resourceData={ACTIVE_TYPES}
        ruleType="boolean"
      />
    </Col>
    <Col md={8} sm={8} xs={24} />
  </Row>
);

Filter.propTypes = {};

export default Filter;
