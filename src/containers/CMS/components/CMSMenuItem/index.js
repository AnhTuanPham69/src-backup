import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Collapse, Switch } from 'antd';
import i18next from 'i18next';
import FormItemUI from 'CMSComponents/components/FormItem';
// import FormColorPicker from '../../../../components/form/FormColorPicker';
import { useSelector, useDispatch } from 'react-redux';
import { get, set } from 'lodash';
import { setCMSData } from '@redux/cms/actions';

const { Panel } = Collapse;

const CMSMenuItem = ({ extraAction, form, item, index, ...props }) => {
  const record = useSelector((state) => state.cms.editorData);
  const dispatch = useDispatch();
  const header = useSelector((state) =>
    get(state.cms.editorData, `content.items[${index}].title`),
  );

  const onChange = (key, data) => {
    const tempData = { ...record };
    set(tempData, key, data);
    dispatch(
      setCMSData({
        key: `content.items`,
        data: [...get(tempData, `content.items`)],
      }),
    );
  };

  useEffect(() => {
    if (
      !form.getFieldValue(`content.items[${index}]`) &&
      get(record, `content.items[${index}]`)
    ) {
      form.setFieldsValue({
        'content.items': get(record, `content.items[${index}]`),
      });
    }
  }, [form, index, record]);

  return (
    <Collapse {...props} expandIconPosition="right">
      <Panel
        forceRender
        className="panel"
        header={header || `${i18next.t('cms.menu.header')} ${item.id}`}
        key={`${index}`}
        extra={extraAction(index)}
      >
        <FormItemUI
          source={`content.items[${index}].title`}
          form={form}
          defaultValue={get(record, `content.items[${index}].title`)}
          header={i18next.t('cms.menu.title')}
          onChange={onChange}
        >
          <Input placeholder={i18next.t('cms.menu.titlePlaceholder')} />
        </FormItemUI>
        <FormItemUI
          source={`content.items[${index}].url`}
          form={form}
          defaultValue={get(record, `content.items[${index}].url`)}
          header={i18next.t('cms.menu.url')}
          onChange={onChange}
          placeholder={i18next.t('cms.menu.urlPlaceholder')}
        />
        <FormItemUI
          source={`content.items[${index}].isLeft`}
          form={form}
          defaultValue={get(record, `content.items[${index}].isLeft`)}
          header={i18next.t('cms.menu.isLeft')}
          ruleType="boolean"
          valuePropName="checked"
          formOptions={{ trigger: 'onChange' }}
        >
          <Switch />
        </FormItemUI>
        {/* <FormColorPicker
          source={`content.contents[${index}].color`}
          form={form}
          header={i18next.t('cms.menu.color')}
        /> */}
      </Panel>
    </Collapse>
  );
};
CMSMenuItem.propTypes = {
  extraAction: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
};

export default CMSMenuItem;
