import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import I18n from 'i18next';
import { Input } from 'antd';
import { setCMSData } from '@redux/cms/actions';
import { FormItemWrapper } from './styles';

const FormItemUI = ({
  source,
  header,
  required,
  requiredMessage,
  form,
  defaultValue,
  ruleType,
  rules,
  children,
  valuePropName,
  className,
  formOptions,
  disabled,
  label,
  onChange,
  valuePropForUI,
  type,
  hasFeedback,
  ...props
}) => {
  // eslint-disable-next-line
  const value = useSelector((state) => get(state.cms.editorData, source));
  const dispatch = useDispatch();
  // we'll remove form in next release
  const onChangeField = (e) => {
    let value = e?.target && ruleType !== 'boolean' ? e.target.value : e;
    if (type === 'editor') {
      value = e.target.getContent();
    }

    if (onChange) {
      onChange({ key: source, data: value });
    } else {
      dispatch(setCMSData({ key: source, data: value }));
    }
  };
  
  return (
    <FormItemWrapper
      hasFeedback={hasFeedback}
      rules={[
        { required, message: I18n.t(requiredMessage) },
        ruleType !== undefined && {
          type: ruleType || 'string',
          message: `${I18n.t('error.validateType')} ${I18n.t(
            ruleType || 'ruleType.string',
          )}`,
        },
        ...rules,
      ]}
      normalize={(value) => {
        const tmp = ruleType === 'number' && value === null ? 0 : value;
        return tmp;
      }}
      valuePropName={valuePropName}
      {...value && {
        initialValue: value,
      }}
      // initialValue={value}
      {...formOptions}
      className={className}
      name={source}
      label={I18n.t(label || header)}
    >
      {React.cloneElement(children, {
        ...props,
        disabled,
        onChange: onChangeField,
        [valuePropForUI]: value,
      })}
    </FormItemWrapper>
  );
};

FormItemUI.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.array,
  valuePropName: PropTypes.string,
  ruleType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  formOptions: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  valuePropForUI: PropTypes.string,
  type: PropTypes.string,
  hasFeedback: PropTypes.bool,
};
FormItemUI.defaultProps = {
  required: false,
  requiredMessage: 'error.required',
  rules: [],
  valuePropName: 'defaultValue',
  formOptions: { trigger: 'onBlur' },
  valuePropForUI: 'value',
  disabled: false,
  children: <Input />,
};

export default FormItemUI;
