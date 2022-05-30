import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import I18n from 'i18next';
import { DownloadOutlined } from '@ant-design/icons';
import { ButtonWrapper } from './styles';

const DownloadButton = (props) => (
  <Tooltip header={I18n.t('tooltip.viewDetail')}>
    <ButtonWrapper
      icon={<DownloadOutlined />}
      onClick={() => props.gotoShowPage(props.record.id, props.source, props.record)}
    >
      {/* <IntlMessages id="button.show" /> */}
    </ButtonWrapper>
  </Tooltip>
);

DownloadButton.propTypes = {
  gotoShowPage: PropTypes.func,
  record: PropTypes.object,
  source: PropTypes.string,
};

DownloadButton.defaultProps = {
  source: 'download',
};

export default DownloadButton;
