import React from 'react';
import { Row, Col } from 'antd';
import { USER_STATUS, USER_ROLE } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import { SearchOutlined } from '@ant-design/icons';
import ReferenceInput from 'containers/rest/ReferenceInput';
import i18next from 'i18next';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = (props) => (
  <Row {...props} gutter={14}>
    <Col md={8} sm={8} xs={24}>
      <RestInputItem
        source="outerFilter.q"
        placeholder="users.placeholder.name"
        suffix={<SearchOutlined />}
      />
    </Col>
    <Col md={8} sm={8} xs={24}>
      <ReferenceInput source="roleId.$eq" resource="roles">
        <RestSelect
          placeholder="users.placeholder.role"
          valueProp="id"
          titleProp="name"
          formatText={(_, data) =>
            i18next.t(USER_ROLE.find((role) => role.value === data?.name)?.text)}
        />
      </ReferenceInput>
    </Col>
    <Col md={8} sm={8} xs={24}>
      <RestSelect
        source="isEnabled.$eq"
        placeholder="users.placeholder.status"
        resourceData={USER_STATUS}
        ruleType="boolean"
      />
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;
