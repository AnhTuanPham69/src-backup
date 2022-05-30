import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import i18next from 'i18next';
import { getRecordData } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';

const RestInputItem = ({
  ContentComponent,
  isReference,
  children,
  format,
  placeholder,
  contentProps,
  suffix,
  prefix,
  required,
  rangerPickerPlaceholder,
  ...props
}) => {
  const { record, form, handlePressEnter } = useContext(RestInputContext);

  return isReference ? (
    React.cloneElement(children, {
      record,
    })
  ) : (
    <FormItem
      {...props}
      form={form}
      required={required}
      defaultValue={
        format(getRecordData(record, props.source)) ??
        format(props.defaultValue)
      }
      name={props.source}
    >
      <ContentComponent
        {...props}
        {...contentProps}
        {...handlePressEnter && {
          onPressEnter: handlePressEnter,
        }}
        record={record}
        placeholder={rangerPickerPlaceholder?[i18next.t(rangerPickerPlaceholder?.[0]), i18next.t(rangerPickerPlaceholder?.[1])]:i18next.t(placeholder)}
        prefix={prefix}
        suffix={suffix}
      />
    </FormItem>
  );
};

RestInputItem.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  ContentComponent: PropTypes.any,
  isReference: PropTypes.bool,
  children: PropTypes.any,
  format: PropTypes.func,
  placeholder: PropTypes.string,
  contentProps: PropTypes.object,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  required: PropTypes.bool,
  rangerPickerPlaceholder: PropTypes.array,
};

RestInputItem.defaultProps = {
  ContentComponent: Input,
  format: (data) => data,
  contentProps: {},
};

export default RestInputItem;
