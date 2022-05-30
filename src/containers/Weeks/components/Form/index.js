import React from 'react';
import { Input, InputNumber } from 'antd';
import RestInputItem from 'components/RestInput/RestInputItem';
import RestAvatarInput from 'components/RestInput/RestAvatarInput';
import { PictureOutlined } from '@ant-design/icons';
import FormStyles from './styles'
// import PropTypes from 'prop-types';

const WeeksForm = () => {
  return (
    <FormStyles>
      <RestAvatarInput
        style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
              }}
        className="avatar-section"
        defaultIcon={<PictureOutlined />}
        defaultText="picture"
        cropDimension={{ width: 300, height: 300 }}
        hasCrop={false}
        source="logo"
        required
      />
      <RestInputItem required min={0} source="periodNumber" header="weeks.periodNumber" placeholder="weeks.periodNumber" ruleType="number" ContentComponent={InputNumber} />
      <RestInputItem required source="name" header="weeks.name" placeholder="weeks.placeholderName" />
      <RestInputItem
        ContentComponent={Input.TextArea}
        rows={5}
        source="description"
        header="weeks.description"
        placeholder="weeks.placeholderDescription"
      />
    </FormStyles>
  );
};

WeeksForm.propTypes = {
};

export default WeeksForm;
