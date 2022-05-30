import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { getRecordData } from 'utils/tools';
import { Slider, Input, Dropdown, Form } from 'antd';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';
import { RangeInputWrapper, MenuWrapper } from './styles';

const RestRangeInput = ({
  isReference,
  format,
  placeholder,
  required,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const onAfterChange = (value) => {
    setInputValue(`From ${value[0]} to ${value[1]}`);
    form.setFieldsValue({
      [props.source]: value,
    });
  };
  const { record, form } = useContext(RestInputContext);
  const marks = {
    0: '0',
    100: '100',
  };

  const menu = (
    <MenuWrapper>
      <Slider
        range
        step={10}
        defaultValue={[0, 100]}
        onAfterChange={onAfterChange}
        marks={marks}
      />
    </MenuWrapper>
  );

  useEffect(() => {
    if (!record?.[props.source]) {
      setInputValue('');
    }
  }, [record?.[props.source]])

  return (
    <RangeInputWrapper>
      <FormItem
        {...props}
        form={form}
        required={required}
        ruleType="array"
        defaultValue={
          format(getRecordData(record, props.source)) ||
          format(props.defaultValue)
        }
        name={props.source}
        className="range-input"
      >
        <Input placeholder={i18next.t(placeholder)} />
      </FormItem>
      <Dropdown overlay={menu} trigger={['click']}>
        <Form.Item>
          <Input placeholder={i18next.t(placeholder)} value={inputValue} />
        </Form.Item>
      </Dropdown>
    </RangeInputWrapper>
  );
};

RestRangeInput.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  isReference: PropTypes.bool,
  format: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onAfterChange: PropTypes.func,
};

RestRangeInput.defaultProps = {
  format: (data) => data,
};

export default RestRangeInput;
