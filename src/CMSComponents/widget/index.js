
import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { Switch } from 'antd';
import FormUploadAvatar from 'components/form/FormUploadAvatar';
import FormSelect from 'components/form/FormSelect/index';
import { get } from 'lodash';
import { Editor } from '@tinymce/tinymce-react';
import ColorPicker from 'CMSComponents/components/ColorPicker';
import PhaseSelect from 'CMSComponents/components/PhaseSelect';
import { PictureOutlined } from '@ant-design/icons';
// eslint-disable-next-line
import ArrayWidget from './ArrayWidget';
import FormItem from '../components/FormItem';

// const modules = {
//   toolbar: [
//     [{ header: '1' }, { header: '2' }, { font: [] }],
//     [{ size: [] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [
//       { list: 'ordered' },
//       { list: 'bullet' },
//       { indent: '-1' },
//       { indent: '+1' },
//     ],
//     ['link', 'image', 'video'],
//     ['clean'],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// };

const CMSUpload = (props) => (
  <FormUploadAvatar
    style={{ width: 250, height: 150, borderRadius: 0 }}
    defaultIcon={<PictureOutlined />}
    defaultText={i18next.t('cms.pageSection.image')}
    cropDimension={{ width: 300, height: 300 }}
    hasCrop={false}
    {...props}
  />
);

const CMSTextArea = (props) => {
  const onEditorChange = (e) => {
    // eslint-disable-next-line
    props.onChange({ key: props.source, data: e });
  };

  return (
    <FormItem {...props} type="editor" ruleType="any">
      <Editor plugins="code" onEditorChange={onEditorChange} />
    </FormItem>
  );
};

const CMSSwitch = (props) => (
  <FormItem
    {...props}
    ruleType="boolean"
    valuePropName="defaultChecked"
    formOptions={{ trigger: 'onChange' }}
    valuePropForUI="checked"
  >
    <Switch />
  </FormItem>
);

export const INPUT_CONTENT = {
  string: FormItem,
  textarea: CMSTextArea,
  image: CMSUpload,
  select: FormSelect,
  array: ArrayWidget,
  boolean: CMSSwitch,
  colorPicker: ColorPicker,
  phaseSelect: PhaseSelect,
};

const makeWidget = ({
  key,
  widget,
  record,
  fields,
  prefixsource = '',
  ...props
}) => {
  const Component = INPUT_CONTENT[widget.type] || FormItem;
  return (
    <Component
      {...widget}
      {...props}
      widget={widget}
      key={key}
      record={record}
      defaultValue={get(
        record,
        `${prefixsource ? `${prefixsource}.` : ''}${key}`,
      )}
      prefixsource={`${prefixsource}.${key}`}
      header={widget.label}
      source={`${prefixsource ? `${prefixsource}.` : ''}${key}`}
    />
  );
};

makeWidget.propTypes = {
  key: PropTypes.string,
  widget: PropTypes.object,
  record: PropTypes.object,
  fields: PropTypes.object,
  prefixsource: PropTypes.string,
};

export const makeLayout = (fields, props) =>
  fields &&
  Object.keys(fields).map((key) =>
    makeWidget({ ...props, key, widget: fields[key] }),
  );
