import React, { useContext } from 'react';
import { Row, Col, Button, message, Select, InputNumber } from 'antd';
import i18next from 'i18next';
import { validateRegex } from 'utils/validateUtils';
import RestInputItem from 'components/RestInput/RestInputItem';
import { RestInputContext } from 'components/RestInput/RestInputContext';
import SVGIcon from '../../../../components/common/SVGIcon';

const LearnsForm = () => {
  const { form } = useContext(RestInputContext);
  const prefix = <SVGIcon type='link' />
  const suffix = (
    <Button onClick={() => {
      navigator.clipboard.writeText(form.getFieldValue('videoLinks'));
      message.success(i18next.t('weeks.gets.message'));
    }}
    >
      {i18next.t('weeks.gets.getLinkBtn')}
    </Button>
  );
  const handleKeyPress = e => e.keyCode === 13 ? e.preventDefault() : '';
  
  return (
    <Row gutter={14}>
      <Col span={24}>
        <RestInputItem
          source="rankNumber"
          header="weeks.learns.rankNumber"
          ruleType="number"
          ContentComponent={InputNumber}
          min={0}
          required
        />
        <RestInputItem required source="name" header="weeks.learns.title" />
        <RestInputItem 
          source="description" 
          header="weeks.learns.conceptDescription"
          placeholder="subscriptionPlans.featuresPlaceholder"
          ContentComponent={Select}
          mode="tags"
          open={false}
          ruleType="array"
          format={description => description?.split('__')}
          onKeyDown={handleKeyPress}
        />
        <RestInputItem
          required
          format={data => data?.[0]}
          source="videoLinks"
          header="weeks.learns.videoLink"
          prefix={prefix}
          suffix={suffix}
          rules={[
            {
              pattern: validateRegex.url,
              message: i18next.t('error.url'),
            },
          ]}  
        />
      </Col>
    </Row>
  );
};

LearnsForm.propTypes = {};


export default LearnsForm;
