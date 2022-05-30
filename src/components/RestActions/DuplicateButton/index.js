import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import { Tooltip, Popconfirm } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { ButtonWrapper } from './styles';

const DuplicateButton = ({ source }) => {
  const dispatch = useDispatch();
  useEffect(() => () => {}, [dispatch]);
  const handleDuplicate = () => {};

  return (
    <Popconfirm
      placement="topLeft"
      title={I18n.t('orders.cloneConfirm')}
      onConfirm={handleDuplicate}
      okText="Yes"
      cancelText="No"
    >
      <Tooltip placement="bottom" title={I18n.t('button.duplicate')}>
        <ButtonWrapper source={source} icon={<CopyOutlined />} />
      </Tooltip>
    </Popconfirm>
  );
};

DuplicateButton.propTypes = {
  source: PropTypes.string,
};

DuplicateButton.defaultProps = {
  source: 'duplicate',
};

export default DuplicateButton;
