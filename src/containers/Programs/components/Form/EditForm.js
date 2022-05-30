import React from 'react';
import { Row, Col, Input, InputNumber, Switch } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestMultiPhotos from 'components/RestInput/RestMultiPhotos';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestSelect from 'components/RestInput/RestSelect';
import PropTypes from 'prop-types';
import FormStyles from './styles';

const ProgramsForm = ({ deleteList, setDeleteList}) => {
  return (
    <FormStyles gutter={14}>
      <Col span={12}>
        <Row gutter={14}>
          <Col span={20}>
            <RestInputItem required source="name" header="programs.name" />
          </Col>
          <Col span={4}>
            <RestInputItem
              source="isActive"
              header="programs.isActive"
              ruleType="boolean"
              ContentComponent={Switch}
            />
          </Col>
          <Col span={24}>
            <RestInputItem
              source="totalPhase"
              header="programs.numberOfPhase"
              disabled
              ruleType="number"
              ContentComponent={InputNumber}
              min={0}
              required
              max={20}
            />
          </Col>
          <Col span={24}>
            <RestInputItem
              source="description"
              header="programs.description"
              placeholder="programs.shortDescription"
            />
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <ReferenceInput
          resource="businesses"
          source="businessId"
          initialFilter={{
            filter: {
              isActive: {
                $eq: true,
              },
            },
          }}
        >
          <RestSelect
            required
            header="programs.businessesEdit"
            valueProp="id"
            titleProp="businessName"
            disabled
          />
        </ReferenceInput>
        <RestInputItem
          ContentComponent={Input.TextArea}
          rows={5}
          source="content"
          header="programs.content"
          placeholder="programs.shortContent"
        />
      </Col>
      <Col span={24}>
        <RestMultiPhotos
          required
          source="images"
          header="programs.images"
          maxItems={1}
          multiple={false}
          deleteList={deleteList}
          setDeleteList={setDeleteList}
        />
      </Col>
    </FormStyles>
  );
};

ProgramsForm.propTypes = {
  deleteList: PropTypes.array,
  setDeleteList: PropTypes.func,
};

export default ProgramsForm;
