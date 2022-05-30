import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import i18next from 'i18next';
import { makeLayout } from 'CMSComponents/widget';
import CMSSectionsPicker from 'CMSComponents/CMSSectionsPicker';
import FormItemUI from 'CMSComponents/components/FormItem';
// import FormSelect from 'components/form/FormSelect';
// import { CMS_TEMPLATES } from 'configs/localData';
import { getCMSFields, getCMSDefaultValue } from '@enouvo/uikit/src';
import { get, set, cloneDeep } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { setCMSData } from '@redux/cms/actions';
import { CustomCollapse } from './styles';

const { Panel } = Collapse;

const PageSection = ({ form, item, index, extraAction, ...props }) => {
  const record = useSelector((state) => state.cms.editorData);
  const dispatch = useDispatch();
  const [currentTemp, setCurrentTemp] = useState(
    get(record, `content.items[${index}].componentType`) || 'HomeBanner',
  );
  const fields = getCMSFields(currentTemp);
  const header = useSelector((state) =>
    get(
      state.cms.editorData,
      `content.items[${index}].${Object.keys(fields)[0]}`,
    ),
  );

  const onChangeSection = ({ data }) => {
    setCurrentTemp(data);
    dispatch(
      setCMSData({
        key: `content.items[${index}]`,
        data: {
          componentType: data,
          ...getCMSDefaultValue(data),
        },
      }),
    );
  };

  const onChange = ({ key, data }) => {
    const tempData = cloneDeep(record);

    set(tempData, key, data);
    dispatch(
      setCMSData({
        key: `content.items[${index}]`,
        data: {
          ...get(tempData, `content.items[${index}]`),
        },
      }),
    );
  };

  useEffect(() => {
    if (get(record, `content.items[${index}].componentType`) !== currentTemp) {
      setCurrentTemp(get(record, `content.items[${index}].componentType`));
    }
  }, [index, currentTemp, record]);

  return (
    <CustomCollapse {...props} expandIconPosition="right">
      <Panel
        forceRender
        className="panel"
        header={
          <div
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: header || `${i18next.t('cms.pageSection.header')}`,
            }}
          />
        }
        key={`${index}`}
        extra={extraAction(index)}
      >
        <FormItemUI
          header="cms.pageSection.sectionTemp"
          form={form}
          defaultValue={get(record, `content.items[${index}].componentType`)}
          source={`content.items[${index}].componentType`}
          hasFeedback
          onChange={onChangeSection}
        >
          <CMSSectionsPicker />
        </FormItemUI>
        {makeLayout(fields, {
          onChange,
          record,
          prefixsource: `content.items[${index}]`,
          form,
        })}
      </Panel>
    </CustomCollapse>
  );
};
PageSection.propTypes = {
  form: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
  extraAction: PropTypes.any,
};

export default PageSection;
