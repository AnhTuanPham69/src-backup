import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getRecordData } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';
import { FormPhoneInputStyles } from './styles';

const RestPhoneInput = ({
  name,
  label,
  required,
  messageRequire,
  rules,
  combineInputLabel,
  inputExtraProps,
  defaultCountry,
  format,
  defaultValue,
  enableFormatPhone,
  ...props
}) => {
  const { record, form } = useContext(RestInputContext);
  return (
    <FormPhoneInputStyles>
      {enableFormatPhone && (
        <Form.Item
          name={`${props.source}Format`}
          noStyle
          style={{ display: 'none'}}
          initialValue={
            format(getRecordData(record, props.source)) ??
            format(props.defaultValue)
          }
        >
          <Input style={{ display: 'none'}} />
        </Form.Item>
      )}
      <FormItem
        {...props}
        form={form}
        required={required}
        defaultValue={
          format(getRecordData(record, props.source)) ??
          format(props.defaultValue)
        }
        name={props.source}
        getValueFromEvent={(value, data, event, formattedValue) => {
          if(enableFormatPhone) {
            if(formattedValue?.includes('(')) {
              form.setFieldsValue({
                [`${props.source}Format`]: formattedValue,
              })
            } else {
              form.setFieldsValue({
                [`${props.source}Format`]: formattedValue?.replace(data?.dialCode, `(${data?.dialCode})`),
              })
            }
          }
          return value;
        }}
      >
        <ReactPhoneInput
          inputExtraProps={inputExtraProps}
          country={defaultCountry}
          enableAreaCodes
          enableSearch
        />
      </FormItem>
    </FormPhoneInputStyles>
  );
};

RestPhoneInput.propTypes = {
  name: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  label: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  rules: PropTypes.array,
  enableFormatPhone: PropTypes.bool,
  combineInputLabel: PropTypes.bool,
  defaultCountry: PropTypes.string,
  inputExtraProps: PropTypes.object,
  source: PropTypes.string,
  defaultValue: PropTypes.any,
  format: PropTypes.func,
};

RestPhoneInput.defaultProps = {
  rules: [],
  messageRequire: 'input.phone.validateMsg.required',
  defaultCountry: 'ca',
  format: (data) => data,
  enableFormatPhone: true,
};

export default RestPhoneInput;
