import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import SVGIcon from 'components/common/SVGIcon';
import { COUNTRY } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import RestInputItem from '../../../../components/RestInput/RestInputItem';

const { RangePicker } = DatePicker;

const Filter = (props) => (
  <Row {...props} gutter={[14, 14]}>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="name.$like"
        placeholder="supports.placeholder.name"
        contentProps={{
          suffix: <SVGIcon type="search" />,
        }}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="email.$like"
        placeholder="supports.placeholder.email"
        contentProps={{
          suffix: <SVGIcon type="search" />,
        }}
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestSelect
        source="country.$eq"
        placeholder="supports.placeholder.country"
        resourceData={COUNTRY}
        ruleType="string"
      />
    </Col>
    <Col md={6} sm={12} xs={24}>
      <RestInputItem
        source="createdAt"
        rangerPickerPlaceholder={["supports.placeholder.startDate","supports.placeholder.endDate"]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
  </Row>
);

Filter.propTypes = {};

export default Filter;
