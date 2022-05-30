import React from 'react';
import PropTypes from 'prop-types';
import { Input, Collapse } from 'antd';
import i18next from 'i18next';
import FormItemUI from 'CMSComponents/components/FormItem';
// import FormColorPicker from '../../../../components/form/FormColorPicker';
import FormUploadAvatar from 'components/form/FormUploadAvatar';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { PictureOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const CMSContactItem = ({ extraAction, form, item, index, ...props }) => {
  const record = useSelector((state) => state.cms.currentData);
  const header = useSelector((state) =>
    get(state.cms.editorData, `content.items[${index}].title`),
  );
  return (
    <Collapse
      {...props}
      defaultActiveKey={[`${index}`]}
      expandIconPosition="right"
    >
      <Panel
        forceRender
        className="panel"
        header={header || `${i18next.t('cms.contact.header')} ${item.id}`}
        key={`${index}`}
        extra={extraAction(index)}
      >
        <FormItemUI
          source={`content.items[${index}].title`}
          form={form}
          defaultValue={get(record, `content.items[${index}].title`)}
          header={i18next.t('cms.contact.title')}
        >
          <Input placeholder={i18next.t('cms.contact.titlePlaceholder')} />
        </FormItemUI>
        <FormItemUI
          source={`content.items[${index}].value`}
          form={form}
          defaultValue={get(record, `content.items[${index}].value`)}
          header={i18next.t('cms.contact.value')}
          placeholder={i18next.t('cms.contact.valuePlaceholder')}
        />
        <FormUploadAvatar
          header={i18next.t('cms.contact.image')}
          defaultValue={get(record, `content.items[${index}].image`)}
          source={`content.items[${index}].image`}
          style={{ width: 100, height: 100, borderRadius: 0 }}
          defaultIcon={<PictureOutlined />}
          defaultText={i18next.t('cms.openGraph.thumbnail')}
          cropDimension={{ width: 100, height: 100 }}
          hasCrop={false}
          label={i18next.t('cms.openGraph.thumbnail')}
          form={form}
        />
      </Panel>
    </Collapse>
  );
};
CMSContactItem.propTypes = {
  extraAction: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
};

export default CMSContactItem;
