import React from 'react';
import { Row, Col } from 'antd';
import { ONBOARDING_TYPES } from 'configs/localData';
import RestSelect from '../../../../components/RestInput/RestSelect';

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={8} sm={8} xs={24}>
      <RestSelect
        source="status.$eq"
        placeholder="onboardings.status"
        resourceData={ONBOARDING_TYPES}
      />
    </Col>
    <Col md={16} sm={16} xs={24} />
  </Row>
);

Filter.propTypes = {};

export default Filter;
