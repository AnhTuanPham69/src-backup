import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import moment from 'moment';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import DnDArea from 'components/DnDArea/index';
import { setSelectedContent, setCMSData } from '@redux/cms/actions';
import { DeleteOutlined } from '@ant-design/icons';
import CMSContentWithDnDWrapper from './styles';

const CMSContentWithDnD = ({ btnAddNewTitle, form, renderItem }) => {
  const contents = useSelector(
    (state) => state.cms?.editorData?.content?.items,
  );
  const current = useSelector((state) => state.cms.currentSelected);
  const dispatch = useDispatch();

  const addContent = useCallback(() => {
    dispatch(
      setCMSData({
        key: 'content.items',
        data: contents
          ? [...contents, { id: moment().unix() }]
          : [{ id: moment().unix() }],
      }),
    );
  }, [contents, dispatch]);

  const onChangeOffset = (items) => {
    // updateContents(items);
    dispatch(setCMSData({ key: `content.items`, data: [...items] }));
  };

  const deleteItem = (event, index) => {
    event.stopPropagation();
    const tempContents = [...contents];
    tempContents.splice(index, 1);
    dispatch(setCMSData({ key: `content.items`, data: tempContents }));
  };

  const onMouseEnter = (item, index) => {
    current !== index && dispatch(setSelectedContent(index));
  };

  useEffect(() => {
    // add default contents
    if (contents?.length === 0) {
      dispatch(setCMSData({ key: 'content.items', data: [{ id: 0 }] }));
    }
  }, [contents, dispatch]);

  const extraAction = (index) => (
    <DeleteOutlined onClick={(e) => deleteItem(e, index)} type="delete" />
  );

  return (
    <CMSContentWithDnDWrapper>
      <DnDArea
        onChangeOffset={onChangeOffset}
        items={contents}
        onMouseEnter={onMouseEnter}
        renderItem={({ item, index, ...childrenProps }) => {
          return renderItem({
            ...childrenProps,
            index,
            form,
            item,
            extraAction,
          });
        }}
      />
      <Button onClick={addContent} type="primary" style={{ width: '100%' }}>
        {i18next.t(btnAddNewTitle)}
      </Button>
    </CMSContentWithDnDWrapper>
  );
};
CMSContentWithDnD.propTypes = {
  btnAddNewTitle: PropTypes.string,
  form: PropTypes.object,
  renderItem: PropTypes.func,
};

export default CMSContentWithDnD;
