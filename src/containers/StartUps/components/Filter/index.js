import React from 'react';
import { Row, Col } from 'antd';
import { USER_PROGRAM_STATUS } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import { SearchOutlined } from '@ant-design/icons';
import RestRangeInput from 'components/RestInput/RestRangeInput';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const Filter = (props) => {
  return (
    <Row {...props} gutter={14}>
      <Col md={8} sm={24} xs={24}>
        <RestInputItem
          source="outerFilter.q"
          placeholder="startUps.placeholder.name"
          suffix={<SearchOutlined />}
        />
      </Col>
      <Col md={8} sm={24} xs={24}>
        <RestRangeInput
          source="programProgress"
          placeholder="startUps.placeholder.progress"
          suffix={<SearchOutlined />}
        />
      </Col>
      <Col md={8} sm={24} xs={24}>
        <RestSelect
          source="status.$eq"
          placeholder="startUps.placeholder.status"
          resourceData={USER_PROGRAM_STATUS}
        />
      </Col>
    </Row>
  );
};

Filter.propTypes = {};

export default Filter;
