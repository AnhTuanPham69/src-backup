import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import i18next from 'i18next';
import { Empty, Col, Input, InputNumber, Select } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestInputAddition from 'components/RestInput/RestInputAddition';
import RestMultiPhotos from 'components/RestInput/RestMultiPhotos';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import { FormWrapper } from 'containers/ProgramPhases/components/Form';
import ReferenceInput from 'containers/rest/ReferenceInput';
import RestSelect from 'components/RestInput/RestSelect';
import AdditionFieldsTracker from './AdditionFieldsTracker';
import FormStyles from './styles';

const ProgramsForm = ({ isEdit, phase, setPhase }) => {
  const { form } = useContext(RestInputContext);
  const handleKeyPress = (e) => (e.keyCode === 13 ? e.preventDefault() : '');
  const renderEmptyState = () => (
    <Empty
      description={
        <div
          style={{
            fontSize: '14px',
          }}
        >
          <div>{i18next.t('programs.phases.noData')}</div>
          <div>{i18next.t('programs.phases.enterPhase')}</div>
        </div>
      }
    />
  );
  return (
    <FormWrapper>
      <FormStyles gutter={20}>
        <Col md={8} sm={24}>
          <div className="program-section left-section">
            <div className="header-section">{i18next.t('programs.info')}</div>
            <div className="form-content">
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
                  header="programs.businesses"
                  placeholder="programs.businesses"
                  valueProp="id"
                  titleProp="businessName"
                />
              </ReferenceInput>
              <RestMultiPhotos
                required
                source="images"
                header="programs.images"
                maxItems={1}
                multiple={false}
              />
              <RestInputItem
                required
                source="name"
                header="programs.name"
                placeholder="programs.shortName"
              />
              <RestInputItem
                required
                source="description"
                header="programs.description"
                placeholder="programs.shortDescription"
              />
              <RestInputItem
                source="totalPhase"
                header="programs.numberOfPhase"
                disabled={isEdit}
                ruleType="number"
                ContentComponent={InputNumber}
                min={1}
                required
                defaultValue={1}
                max={20}
                getValueFromEvent={(value) => {
                  const validData = value > 1 ? value : 1;
                  debounce(() => setPhase(validData), 700)();
                  return validData;
                }}
              />
              <RestInputItem
                ContentComponent={Input.TextArea}
                required
                rows={5}
                source="content"
                header="programs.content"
                placeholder="programs.shortContent"
              />
            </div>
          </div>
        </Col>
        <Col md={16} sm={24}>
          <div className="program-section phase-section">
            <div className="header-section">
              {i18next.t('programs.phaseDetails')}
            </div>
            <div className="form-content">
              <RestInputAddition
                header="programs.phaseTitle"
                hasDivider
                addButtonType="dashed"
                onAdd={() => {
                  const currentPhase = form.getFieldValue('totalPhase') || 1;
                  setPhase(currentPhase + 1);
                  form.setFieldsValue({
                    totalPhase: currentPhase + 1,
                  });
                }}
                onRemove={() => {
                  const currentPhase = form.getFieldValue('totalPhase') || 1;
                  if (currentPhase > 1) {
                    setPhase(currentPhase - 1);
                    form.setFieldsValue({
                      totalPhase: currentPhase - 1,
                    });
                  }
                  if (currentPhase === 1) {
                    setPhase(1);
                    form.setFieldsValue({
                      totalPhase: 1,
                    });
                  }
                }}
                {...(form.getFieldValue('totalPhase') > 1
                  ? {
                      isShowDeleteButton: true,
                    }
                  : {
                      isShowDeleteButton: false,
                    })}
                source="programPhases"
                Tracker={AdditionFieldsTracker}
                trackerProps={{
                  phase,
                }}
                addBtnText="programs.phases.addNew"
                isShowAddBtn={!isEdit}
                renderEmptyState={renderEmptyState}
              >
                <div
                  isLabel
                  labelClassName="section-header"
                  label="programs.phases.info"
                />
                <RestInputItem
                  colLayout={{ span: 12 }}
                  required={!isEdit}
                  source="name"
                  header="programs.phases.name"
                  placeholder="programs.phases.namePlaceholder"
                />
                <RestInputItem
                  colLayout={{ span: 12 }}
                  required={!isEdit}
                  source="totalPeriod"
                  ruleType="number"
                  ContentComponent={InputNumber}
                  header="programs.phases.week"
                  min={1}
                  getValueFromEvent={(value) => (value > 1 ? value : 1)}
                  defaultValue={1}
                />
                <RestInputItem
                  colLayout={{ span: 24 }}
                  source="description"
                  header="programs.description"
                  placeholder="programs.phases.descriptionPlaceholder"
                />
                <RestMultiPhotos
                  colLayout={{ span: 24 }}
                  required
                  source="images"
                  header="programs.phases.images"
                />
                <div
                  isLabel
                  labelClassName="section-header"
                  label="programs.phases.subscriptionPlan"
                />
                <RestInputItem
                  colLayout={{ span: 12 }}
                  source={['subscriptionPlan', 'quantity']}
                  header="programs.subscriptionPlan.quantity"
                  ruleType="number"
                  ContentComponent={InputNumber}
                  getValueFromEvent={(value) => (value > 2 ? value : 2)}
                  min={2}
                  required
                  defaultValue={2}
                />
                <RestInputItem
                  colLayout={{ span: 12 }}
                  source={['subscriptionPlan', 'price']}
                  header="programs.subscriptionPlan.price"
                  ruleType="number"
                  ContentComponent={InputNumber}
                  min={0}
                  required
                />
                <div
                  isLabel
                  labelClassName="section-header"
                  label="programs.phases.marketingContent"
                />
                <RestInputItem
                  colLayout={{ span: 24 }}
                  source={['subscriptionPlan', 'features']}
                  header="programs.subscriptionPlan.features"
                  placeholder="programs.recommendDataPlaceholder"
                  ContentComponent={Select}
                  mode="tags"
                  open={false}
                  ruleType="array"
                  onKeyDown={handleKeyPress}
                  required
                />
                <RestInputItem
                  colLayout={{ span: 24 }}
                  source={['subscriptionPlan', 'learnData']}
                  header="programs.subscriptionPlan.learnData"
                  placeholder="programs.contentPlaceholder"
                  ContentComponent={Select}
                  mode="tags"
                  open={false}
                  ruleType="array"
                  onKeyDown={handleKeyPress}
                  required
                />
                <RestInputItem
                  colLayout={{ span: 24 }}
                  source={['subscriptionPlan', 'getData']}
                  header="programs.subscriptionPlan.getData"
                  placeholder="programs.getDataPlaceholder"
                  ContentComponent={Select}
                  mode="tags"
                  open={false}
                  ruleType="array"
                  onKeyDown={handleKeyPress}
                  required
                />
              </RestInputAddition>
            </div>
          </div>
        </Col>
      </FormStyles>
    </FormWrapper>
  );
};

ProgramsForm.propTypes = {
  isEdit: PropTypes.bool,
  phase: PropTypes.number,
  setPhase: PropTypes.func,
};

export default ProgramsForm;
