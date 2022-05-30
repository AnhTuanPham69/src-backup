import React, { useState } from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { FILE_TYPES } from 'configs/localData';
import { FileOutlined } from '@ant-design/icons';
import { Row, Col, Modal, Tooltip } from 'antd';
import GridPhotos from 'components/common/GridPhotos';
import { isImageFile, getExtensionFile } from '@enouvo/uikit/src/utils/fileUtils';
import FilesListStyles from './styles';

const FilesList = ({ medias, header }) => {
  const [visibleModalViewFile, setVisibleModalViewFile] = useState(false);
  const [urlViewObj, setUrlViewObj] = useState({ name: '', url: '/' });
  const getPropertyFile = (property, fileName) => {
    return getExtensionFile(fileName)
      ? FILE_TYPES.find(
        (file) =>
          file.value.toLocaleLowerCase() ===
          getExtensionFile(fileName).toLocaleLowerCase(),
      )?.[property]
      : null;
  };
  
  const handleClick = async (e, item) => {
    e.preventDefault();
        if (isImageFile(item?.url)) {
          setUrlViewObj({
            name: item?.name,
            url: item?.url,
            isImage: true,
          });
          setVisibleModalViewFile(true);
        } else {
          window.open(item?.url, '_blank');
        }
  };

  const onCancel = () => {
    setVisibleModalViewFile(false);
  };

  const images = medias?.filter(media => isImageFile(media?.url));

  const files = medias?.filter(media => !isImageFile(media?.url));

  return (
    <FilesListStyles className="list-file">
      {images?.length > 0 && (
        <>
          <div className="title-label">
            {header
              ? `${i18next.t(header)}: `
              : `${i18next.t('medias.attachedImage')}: `}
          </div>
          <GridPhotos images={images?.map(image => image?.url)} />
          <div style={{ marginBottom: 10 }} />
        </>
      )}
      {files?.length > 0 && (
        <div className="title-label">
          {header
            ? `${i18next.t(header)}: `
            : `${i18next.t('medias.attachedFile')}: `}
        </div>
      )}
      {!medias?.length && (
        <div className="empty-media">{i18next.t('medias.empty')}</div>
      )}
      <Row className="list-file-item" gutter={15}>
        {files?.map((item) => {
          const Icon = getPropertyFile('icon', item?.url) || FileOutlined;
          return (
            <Col key={item?.url} className="col-file-item">
              <div className="file-item">
                <span
                  role="presentation"
                  className="a-file-item"
                  onClick={(e) => handleClick(e, item)}
                >
                  <span className="icon-file-name">
                    {isImageFile(item?.url) ? (
                      <div className="wrapper-file-item">
                        <img
                          src={item?.url}
                          alt=""
                          className="image-file"
                        />
                      </div>
                    ) : (
                      <div className="wrapper-file-item">
                        <Icon
                          style={{
                              color: getPropertyFile('color', item?.url),
                            }}
                          className="icon-file"
                        />
                      </div>
                      )}
                    <Tooltip title={item?.name}>
                      <span className="name-file">{item?.name}</span>
                    </Tooltip>
                  </span>
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
      <Modal visible={visibleModalViewFile} footer={null} onCancel={onCancel}>
        <div style={{ width: '100%' }}>
          <img src={urlViewObj?.url} alt="" style={{ objectFit: 'contain', width: '100%'}} />
        </div>
      </Modal>
    </FilesListStyles>
  );
};
FilesList.propTypes = {
  medias: PropTypes.array,
  header: PropTypes.string,
};
export default FilesList;
