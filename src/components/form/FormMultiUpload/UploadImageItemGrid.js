import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { isImageFile, getExtensionFile } from 'utils/tools';
import { FILE_TYPES } from 'configs/localData';
import {
  FileOutlined,
  LoadingOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { ItemGridStyles, ModalContentStyles } from './styles';

const UploadImageItemGrid = ({ item, deleteImage }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const imgSrc = item?.url || item?.response?.url;
  const toggleModal = (e) => {
    e.stopPropagation();
    if (isImageFile(item?.name || item?.fileName || item?.url)) {
      setIsShowModal((isShowModal) => !isShowModal);
    }
  };
  const getPropertyFile = (property) => {
    return getExtensionFile(item.fileName || item.name || item.url)
      ? FILE_TYPES.find(
          (file) =>
            file.value.toLocaleLowerCase() ===
            getExtensionFile(
              item.fileName || item.name || item.url,
            ).toLocaleLowerCase(),
        )?.[property]
      : null;
  };

  const Icon = getPropertyFile('icon') || FileOutlined;

  const handleDeletedFile = (e, item) => {
    e.stopPropagation();
    deleteImage(item);
  };
  return (
    <ItemGridStyles
      onClick={toggleModal}
      className="uploadImage"
      role="presentation"
    >
      <ModalContentStyles
        visible={isShowModal}
        footer={null}
        onCancel={toggleModal}
      >
        <img src={item.url || item?.response?.url} alt="" />
      </ModalContentStyles>
      <div className="file-item">
        <div className="div-item-image">
          {item.status === 'error' && (
            <ExclamationCircleOutlined className="loading error" />
          )}
          {item.status !== 'error' && item.status !== 'done' && !item.url && (
            <LoadingOutlined className="loading" />
          )}
          {(item.status === 'done' || item.url) &&
            ((typeof item?.type === 'string' && item.type?.includes('image')) ||
            isImageFile(item?.name || item?.fileName || item?.url) ? (
              <div className="imageCount">
                <img alt="" src={imgSrc} className="image" />
                <div className="overlay2">
                  <EyeOutlined onClick={toggleModal} />
                  <CloseOutlined onClick={(e) => handleDeletedFile(e, item)} />
                </div>
              </div>
            ) : (
              <div className="file-type">
                <Icon
                  style={{
                    color: getPropertyFile('color'),
                  }}
                  className="icon-file"
                />
                <div className="overlay2">
                  <CloseOutlined onClick={(e) => handleDeletedFile(e, item)} />
                </div>
              </div>
            ))}
        </div>
        <Tooltip title={item.name || item.fileName || item.url}>
          <span className="name-file">
            {item.name || item.fileName || item.url}
          </span>
        </Tooltip>
      </div>
    </ItemGridStyles>
  );
};
UploadImageItemGrid.propTypes = {
  item: PropTypes.object,
  // onPreviewUI: PropTypes.func,
  deleteImage: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onSetDefault: PropTypes.func,
  // defaultSourceKey: PropTypes.string,
  // isDefault: PropTypes.bool,
};

export default UploadImageItemGrid;
