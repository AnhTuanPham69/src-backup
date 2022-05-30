import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { Select, Spin } from 'antd';
import { Waypoint } from 'react-waypoint';
import { map, isObject, isEmpty } from 'lodash';
import { getRecordData, onSearch as onChangeSearch } from 'utils/tools';
import FormItem from '../FormItem';
import { SelectWrapper } from './style';

const { Option } = Select;

const FormSelect = ({
  allowClear,
  header,
  required,
  placeholder,
  resourceData,
  valueProp,
  titleProp,
  onSearch,
  onClear,
  onChange,
  selectProps,
  formatText,
  onEnter,
  isFilterOption,
  isShowSearch,
  searchKey,
  setFieldsValue,
  loading,
  getRecord,
  ...props
}) => {

  const { source, children, className, disabled, format } = props;

  const onSelectOption = useCallback(
    (inputValue, option) => {
      if (
        onChangeSearch(
          isObject(option.children)
            ? getRecordData(
                option.children.props && option.children.props.record,
                searchKey,
              )
            : option.children,
          inputValue,
        )
      ) {
        return option.value;
      }
      return null;
    },
    [searchKey],
  );

  const optionWaypoint = useMemo(
    () => (
      <Option
        className="loading-select-option"
        disabled
        value="waypointTracking"
        key="waypoint"
      >
        <Waypoint onEnter={onEnter} />
      </Option>
    ),
    [onEnter],
  );

  const optionLoading = useMemo(
    () => (
      <Option
        className="loading-select-option"
        disabled
        value="loadingTracking"
        key="loading"
      >
        <div className="loading-select">
          <Spin />
        </div>
      </Option>
    ),
    [],
  );

  const dataOption = useMemo(
    () => (format ? format(resourceData) : resourceData),
    [resourceData, format],
  );

  return (
    <FormItem
      {...props}
      placeholder={i18n.t(placeholder)}
      header={i18n.t(header)}
      required={required}
      name={source}
    >
      <SelectWrapper
        disabled={disabled}
        placeholder={i18n.t(placeholder)}
        filterOption={isFilterOption ? onSelectOption : false}
        showSearch
        allowClear={allowClear}
        className={className}
        onChange={onChange}
        {...(isShowSearch && {
          onSearch: (value) => onSearch(value),
        })}
        {...allowClear && { onClear }}
        {...selectProps}
        autoComplete="new-password"
      >
        {map(dataOption, (data) =>
          children ? (
            <Option
              key={valueProp ? getRecordData(data, valueProp) : data}
              value={valueProp ? getRecordData(data, valueProp) : data}
            >
              {React.cloneElement(children, {
                key: valueProp ? getRecordData(data, valueProp) : data,
                record: data,
                valueProp,
                titleProp,
              })}
            </Option>
          ) : (
            <Option
              key={valueProp ? getRecordData(data, valueProp) : data}
              value={valueProp ? getRecordData(data, valueProp) : data}
              {...(getRecord && {
                id: JSON.stringify(data),
              })}
            >
              {formatText(
                i18n.t(titleProp ? getRecordData(data, titleProp) : data),
                data,
              )}
            </Option>
          ),
        )}
        {/* <Option key="loading" disabled value="loadingTracking">
            <Waypoint onEnter={onEnter} />
            {loading && (
              <div className="loading" style={{ textAlign: 'center' }}>
                <Spin />
              </div>
            )}
          </Option> */}
        {!isEmpty(dataOption) && !loading && optionWaypoint}
        {loading && optionLoading}
      </SelectWrapper>
    </FormItem>
  );
};

FormSelect.propTypes = {
  allowClear: PropTypes.bool,
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  resourceData: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  children: PropTypes.node,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  format: PropTypes.func,
  searchKey: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  selectProps: PropTypes.object,
  formatText: PropTypes.func,
  record: PropTypes.object,
  onEnter: PropTypes.func,
  isFilterOption: PropTypes.bool,
  getRecord: PropTypes.bool,
  isShowSearch:PropTypes.bool,
  onClear: PropTypes.func,
  setFieldsValue: PropTypes.func,
};

FormSelect.defaultProps = {
  required: false,
  requiredMessage: i18n.t('error.required'),
  rules: [],
  placeholder: 'placeholder.undefined',
  onChange: () => {},
  onSearch: () => {},
  formatText: (data) => data,
  onClear: () => {},
  selectProps: {},
  valueProp: 'value',
  titleProp: 'text',
  allowClear: true,
  isFilterOption: true,
  isShowSearch: true,
};

export default FormSelect;
