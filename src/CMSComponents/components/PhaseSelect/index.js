import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
// import { Waypoint } from 'react-waypoint';
import { map } from 'lodash';
import { getAllProgramPhases } from '@redux/programPhases/actions';
import { getByIdPrograms } from '@redux/programs/actions';
import { setCMSData } from '@redux/cms/actions';
import CRUDSelectors from '@redux/crudSelectors';
import FormItem from '../FormItem';
import { getRecordData } from '../../../utils/tools';
import { SelectWrapper } from './styles';

const { Option } = Select;

const PhaseSelect = props => {
  const {
    header,
    placeholder,
    defaultValue,
    titleProp,
    format,
    className,
    formatText,
    source,
  } = props;
  const dispatch = useDispatch();
  const currentProgramId = useSelector(CRUDSelectors.programs.getCurrentId);
  const programs = useSelector(CRUDSelectors.programs.getDataArr);
  const programPhases = useSelector(CRUDSelectors.programPhases.getDataArr);
  const loading = useSelector(CRUDSelectors.programPhases.getLoading);
  const handleChange = value => {
    const program = JSON.parse(value || '{}');
    if (program?.id) {
      dispatch(getByIdPrograms({
        data: program,
      }));
      dispatch(setCMSData({ key: source, data: '' }));
    }
  }

  useEffect(() => {
    currentProgramId && dispatch(getAllProgramPhases({
      data: {
        limit: 100,
        page: 1,
        filter: {
          programId: {
            $eq: currentProgramId,
          },
        },
      },
      options: {
        isRefresh: true,
        customApiResource: 'program-phases',
      },
    }))
  }, [currentProgramId])

  return (
    <>
      <FormItem
        ruleType="string"
        placeholder="Select program"
        header="Program"
        required
        // defaultValue={defaultValue}
      >
        <SelectWrapper
          getPopupContainer={trigger => trigger.parentNode}
          disabled
          placeholder={i18n.t(placeholder)}
          showSearch
          allowClear={false}
          className={className}
          onSelect={handleChange}
        >
          {map(format ? format(programs) : programs, data =>
            (
              <Option
                key={data}
                value={JSON.stringify(data)}
              >
                {formatText(titleProp ? getRecordData(data, titleProp) : data, data)}
              </Option>
            ),
          )}
        </SelectWrapper>
      </FormItem>
      <FormItem
        ruleType="string"
        {...props}
        placeholder="Select phase"
        header={i18n.t(header)}
        defaultValue={defaultValue}
      >
        <SelectWrapper
          getPopupContainer={trigger => trigger.parentNode}
          disabled={!currentProgramId}
          placeholder={i18n.t(placeholder)}
          showSearch
          allowClear={false}
          className={className}
          loading={loading}
        >
          {map(format ? format(programPhases) : programPhases, data =>
            (
              <Option
                key={data}
                value={JSON.stringify(data)}
              >
                {formatText(titleProp ? getRecordData(data, titleProp) : data, data)}
              </Option>
            ),
          )}
        </SelectWrapper>
      </FormItem>
    </>
  );
}

PhaseSelect.propTypes = {
  source: PropTypes.string,
  header: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  children: PropTypes.node,
  rules: PropTypes.array,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  format: PropTypes.func,
  searchKey: PropTypes.string,
  className: PropTypes.string,
  formatText: PropTypes.func,
  record: PropTypes.object,
  onEnter: PropTypes.func,
};

PhaseSelect.defaultProps = {
  required: false,
  requiredMessage: i18n.t('error.required'),
  rules: [],
  placeholder: 'placeholder.undefined',
  formatText: data => data,
  titleProp: 'name',
};

export default PhaseSelect;
