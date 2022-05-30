import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Form } from 'antd';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { setCMSData } from '@redux/cms/actions';

import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
// eslint-disable-next-line
import { makeLayout } from '..';

const ArrayWidget = ({ onChange, widget, label, source, ...props }) => {
  const items = useSelector((state) => get(state.cms.editorData, source));
  const dispatch = useDispatch();

  const deleteItem = (event, index) => {
    event.stopPropagation();
    const tempItems = [...items];
    tempItems.splice(index, 1);
    if (onChange) {
      onChange({ key: source, data: tempItems });
    } else {
      dispatch(setCMSData({ key: source, data: tempItems }));
    }
  };

  const onAddField = () => {
    if (onChange) {
      onChange({ key: source, data: [...items, {}] });
    } else {
      dispatch(setCMSData({ key: source, data: [...items, {}] }));
    }
  };

  const extraAction = (index) => (
    <DeleteOutlined onClick={(e) => deleteItem(e, index)} type="delete" />
  );

  useEffect(() => {
    if (!items) {
      dispatch(setCMSData({ key: source, data: [{}] }));
    }
  }, [dispatch, source, items]);

  return (
    <Form.Item label={widget.label}>
      <Collapse activeKey="items">
        <Collapse.Panel
          forceRender
          showArrow={false}
          extra={<PlusCircleOutlined onClick={onAddField} type="plus" />}
          header="List Items"
          key="items"
        >
          <Collapse expandIconPosition="right">
            {items &&
              items.map((item, index) => (
                <Collapse.Panel
                  forceRender
                  extra={extraAction(index)}
                  header={`Item ${index}`}
                  key={String(index)}
                >
                  {makeLayout(widget.item, {
                    ...props,
                    onChange,
                    prefixsource: `${source}[${index}]`,
                  })}
                </Collapse.Panel>
              ))}
          </Collapse>
        </Collapse.Panel>
      </Collapse>
    </Form.Item>
  );
};

ArrayWidget.propTypes = {
  widget: PropTypes.object,
  label: PropTypes.string,
  source: PropTypes.string,
  onChange: PropTypes.func,
};

export default ArrayWidget;
