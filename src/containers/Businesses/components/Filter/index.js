import React from 'react';
import { Row, Col } from 'antd';
import { USER_STATUS, COUNTRY } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import { SearchOutlined } from '@ant-design/icons';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={4} sm={4} xs={24}>
      <RestInputItem
        source="businessName.$like"
        placeholder="businesses.placeholder.businessName" 
        suffix={<SearchOutlined />}

      />
    </Col>
    <Col md={4} sm={4} xs={24}>
      <RestInputItem
        source="contactName.$like"
        placeholder="businesses.placeholder.contactName" 
        suffix={<SearchOutlined />}

      />
    </Col>
    <Col md={4} sm={4} xs={24}>
      <RestInputItem
        source="contactEmail.$like"
        placeholder="businesses.placeholder.contactEmail" 
        suffix={<SearchOutlined />}

      />
    </Col>
    <Col md={4} sm={4} xs={24}>
      <RestInputItem
        source="contactPhoneNumber.$like"
        placeholder="businesses.placeholder.contactPhoneNumber" 
        suffix={<SearchOutlined />}

      />
    </Col>

    <Col md={4} sm={4} xs={24}>
      <RestSelect
        source="country.$eq"
        placeholder="businesses.placeholder.country"
        resourceData={COUNTRY}
        ruleType="string"
      />
    </Col>
    <Col md={4} sm={4} xs={24}>
      <RestSelect
        source="isActive.$eq"
        placeholder="businesses.placeholder.status"
        resourceData={USER_STATUS}
        ruleType="boolean"
      />
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;
