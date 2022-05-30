import React from 'react';
import i18next from 'i18next';
import { UploadOutlined } from '@ant-design/icons';

const UploadButton = () => (
  <div>
    <UploadOutlined />
    <div className="ant-upload-text">{i18next.t('button.upload')}</div>
  </div>
);
UploadButton.propTypes = {};
export default UploadButton;
