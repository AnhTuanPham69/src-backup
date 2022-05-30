import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { setCMSData } from '@redux/cms/actions';
import { get } from 'lodash';
import FormItem from '../FormItem';

const ColorPicker = (props) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => get(state.cms.editorData, props.source));
  // we'll remove form in next release
  const onChangeField = (source, e) => {
    if (props.onChange) {
      props.onChange({ key: source, data: e?.hex });
    } else {
      dispatch(setCMSData({ key: source, data: e?.hex }));
    }
  };
  const handleChangeComplete = (e) => {
    onChangeField(props.source, e);
  };
  return (
    <FormItem ruleType="string" {...props} onChange={onChangeField}>
      <SketchPicker onChangeComplete={handleChangeComplete} color={value} />
    </FormItem>
  );
};
ColorPicker.propTypes = {
  onChange: PropTypes.func,
  source: PropTypes.string,
};

export default ColorPicker;
