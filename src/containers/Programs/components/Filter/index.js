import React from 'react';
import { Col, DatePicker } from 'antd';
import { ACTIVE_TYPES } from 'configs/localData';
import RestSelect from 'components/RestInput/RestSelect';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestInputItem from '../../../../components/RestInput/RestInputItem';
import { FilterWrapper } from './styles';

const { RangePicker } = DatePicker;

const colStyles = {
  flexBasis: '20%',
  width: '20%',
};

const Filter = (props) => (
  <FilterWrapper {...props} gutter={[14, 14]}>
    <Col {...colStyles}>
      <RestInputItem
        source="programCode.$like"
        placeholder="programs.placeholder.id"
      />
    </Col>
    <Col {...colStyles}>
      <ReferenceInput resource="businesses" source="businessId.$eq">
        <RestSelect
          placeholder="programs.placeholder.businessName"
          valueProp="id"
          titleProp="businessName"
        />
      </ReferenceInput>
    </Col>
    <Col {...colStyles}>
      <RestInputItem
        source="name.$like"
        placeholder="programs.placeholder.name"
      />
    </Col>
    <Col {...colStyles}>
      <RestSelect
        source="isActive.$eq"
        placeholder="programs.placeholder.isActive"
        resourceData={ACTIVE_TYPES}
        ruleType="boolean"
      />
    </Col>
    <Col {...colStyles}>
      <RestInputItem
        source="createdAt"
        rangerPickerPlaceholder={[
          'programs.placeholder.startDate',
          'programs.placeholder.endDate',
        ]}
        ContentComponent={RangePicker}
        ruleType="array"
      />
    </Col>
  </FilterWrapper>
);

Filter.propTypes = {};

export default Filter;
