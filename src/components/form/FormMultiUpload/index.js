import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Upload, Modal, notification, Button } from 'antd';
import { xor, isEmpty } from 'lodash';
import imageCompression from 'browser-image-compression';
import i18next from 'i18next';
import { getImageUrl, getRecordData } from 'utils/tools';
import SVGIcon from 'components/common/SVGIcon';
import { setLoading } from '@redux/loading/slice';

import FormItem from '../FormItem';
import { getUrl, uploadMedia } from '../../../api/uploadMedia';
import { FormMultiUploadWrapper } from './styles';
import UploadImage from '../../../assets/images/upload.png';
import UploadImageItemGrid from './UploadImageItemGrid';

const { Dragger } = Upload;

export const RestUpload = ({
  defaultSourceKey,
  deleteAction,
  isGetName,
  maxItems,
  deleteList,
  setDeleteList,
  ...props
}) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [defaultImage, setDefaultImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const loading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    if (!isEmpty(props.record) && isEmpty(fileList)) {
      setFileList(makeFileList(props.record[props.source]));
    }
    // eslint-disable-next-line
  }, [props.record]);
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = (file) => {
    setPreviewVisible(true);
    setPreviewImage(file.url || file.thumbUrl);
  };

  const deleteImage = async (item) => {
    const results = xor(fileList, [item]);
    setDeleteList([...deleteList, item]);
    setFileList(results);
    if (deleteAction && item.id) {
      deleteAction({
        id: item.id,
      });
    }
    results.length === 0 && setDisabled(false);
    const formattedData = results.map((e) => ({
      ...(e.id && {
        id: e.id,
      }),
      ...(isGetName && {
        name: e.response?.name || e.name || e.xhr?.name || e.url,
      }),
      url: e.url || e.response?.url,
      type: e.type,
    }));
    props.form &&
      props.form.setFieldsValue({
        ...(Array.isArray(props.source) &&
        Number.isInteger(props.source?.[0]) &&
        props.parentSource
          ? {
              [props.parentSource]: props.form
                .getFieldValue(props.parentSource)
                ?.map((e, index) => ({
                  ...e,
                  ...(index === props.source?.[0] && {
                    [props.source?.[1]]: formattedData,
                  }),
                })),
            }
          : {
              [props.source]: formattedData,
            }),
      });
  };

  const onMouseEnter = () => {
    setDisabled(true);
  };

  const onMouseLeave = () => {
    setDisabled(false);
  };

  const onSetDefault = useCallback(
    (item) => {
      defaultSourceKey && setDefaultImage(item.response?.url || item.url);
      defaultSourceKey &&
        props.form &&
        props.form.setFieldsValue({
          [defaultSourceKey]: item.response?.url || item.url,
        });
    },
    [defaultSourceKey, props.form],
  );

  const handleChange = (e) => setFileList(e.fileList);
  const uploadButton = (
    // fileList && fileList.length === 0 ? (
    <div className="uploadArea">
      <div className="ant-upload-text">
        <div>
          <SVGIcon size={30} type="upload" />
        </div>
        <Button type="primary">{i18next.t('upload.uploadBtn')}</Button>
        <p className="text">{i18next.t('upload.uploadText')}</p>
        {props.placeholder && i18next.t(props.placeholder)}
      </div>
    </div>
  );
  // ) : null;

  useEffect(() => {
    if(maxItems && fileList?.length && maxItems === fileList?.length) {
      setDisabled(true);
    }
    else setDisabled(false)
  }, [fileList?.length])

  useEffect(
    () => {
      setFileList(
        props.defaultValue || getRecordData(props.record, props.source)
          ? makeFileList(
              props.defaultValue || getRecordData(props.record, props.source),
            )
          : [],
      );
      defaultSourceKey &&
        onSetDefault({ url: getRecordData(props.record, defaultSourceKey) });
      return () => {
        dispatch(setLoading(false));
      };
    },
    // eslint-disable-next-line
    [
      // defaultSourceKey,
      // onSetDefault,
      // props.defaultValue,
      // props.record,
      // props.record.id,
      // props.source,
    ],
  );

  const customRequest = async ({ onSuccess, file }) => {
    try {
      dispatch(setLoading(true));
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      let compressedFile = file;
      if (file.type?.includes('image')) {
        compressedFile = await imageCompression(file, options);
        compressedFile.lastModifiedDate = new Date();
        compressedFile.name = file.name;
      }
      const responseS3 = await getUrl(compressedFile.name, compressedFile.type);
      const response = await uploadMedia(responseS3.uploadUrl, compressedFile);

      if (response) {
        dispatch(setLoading(false));
        onSuccess(
          {
            url: responseS3.url,
            name: responseS3.fileName,
          },
          compressedFile,
        );
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      notification.error({
        title: 'Error',
        message:
          error && error.message
            ? error.message
            : 'Server Internal Error. Please try later !!!!',
      });
      dispatch(setLoading(false));
    }
  };

  const onChangeUpload = (e) => {
    if (fileList.length === 0) {
      onSetDefault(e.fileList[0]);
    }
    handleChange({ fileList: e.fileList });
    const formattedData = e.fileList.map((data) => ({
      ...(data?.id && {
        id: data?.id,
      }),
      ...(isGetName && {
        name:
          data?.response?.name || data?.name || data?.xhr?.name || data?.url,
      }),
      url: data?.response?.url || data?.url,
      type: data?.type,
    }));
    // setPreviewImage(formattedData);
    props.onChange && props.onChange(formattedData);
    props.form &&
      props.form.setFieldsValue({
        ...(Array.isArray(props.source) &&
        Number.isInteger(props.source?.[0]) &&
        props.parentSource
          ? {
              [props.parentSource]: props.form
                .getFieldValue(props.parentSource)
                ?.map((e, index) => ({
                  ...e,
                  ...(index === props.source?.[0] && {
                    [props.source?.[1]]: formattedData,
                  }),
                })),
            }
          : {
              [props.source]: formattedData,
            }),
      });
    if (defaultSourceKey && formattedData.indexOf(defaultImage) === -1) {
      onSetDefault(e.fileList[0]);
    }
  };
  return (
    <div
      style={{
        ...(loading && {
          pointerEvents: 'none',
        }),
      }}
    >
      {props.form && defaultSourceKey && (
        <FormItem
          {...props}
          required={false}
          source={defaultSourceKey}
          defaultValue={
            props.defaultValue || getRecordData(props.record, defaultSourceKey)
          }
          style={{ display: 'none' }}
        >
          <input style={{ display: 'none' }} />
        </FormItem>
      )}
      <FormMultiUploadWrapper>
        {props.form && (
          <FormItem
            {...props}
            required={props.required}
            ruleType="array"
            defaultValue={
              props.defaultValue || getRecordData(props.record, props.source)
            }
            // style={{ display: 'none' }}
          >
            <input style={{ display: 'none' }} />
          </FormItem>
        )}
        <div className="upload-file-wrapper">
          <div className={`selectedImage ${fileList?.length && 'has-image'}`}>
            {fileList.map((img, index) => (
              <UploadImageItemGrid
                key={String(index)}
                defaultSourceKey={defaultSourceKey}
                onSetDefault={onSetDefault}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                deleteImage={deleteImage}
                onPreviewUI={handlePreview}
                item={img}
                alt="upload.png"
                isDefault={
                  defaultImage &&
                  (defaultImage === img.url ||
                    img.response?.url === defaultImage)
                }
              />
            ))}
            <div className="overlayImage" style={{ display: 'none' }}>
              <img src={UploadImage} alt="upload.png" />
            </div>
          </div>
          <Dragger
            customRequest={customRequest}
            // action={`${process.env.REACT_APP_UPLOAD_PHOTO_URL}`}
            // headers={{
            //   'x-requested-with': undefined,
            //   Authorization: `Client-ID ${process.env.REACT_APP_UPLOAD_PHOTO_KEY}`,
            // }}
            accept={props.accept || 'image/*'}
            multiple={props.multiple}
            disabled={props.disabled || disabled}
            listType="picture-card"
            fileList={fileList.map((e) => ({
              ...e,
              url: getImageUrl(e?.response?.url || e.url),
            }))}
            showUploadList={false}
            onPreview={handlePreview}
            onChange={onChangeUpload}
          >
            {uploadButton}
          </Dragger>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{ width: '100%' }}
            src={previewImage ? getImageUrl(previewImage) : ''}
          />
        </Modal>
      </FormMultiUploadWrapper>
    </div>
  );
};

const makeFileList = (values) =>
  Array.isArray(values)
    ? values.map((value) =>
        value && value.url
          ? value
          : {
              uid: value,
              status: 'done',
              ...(typeof value === 'string' && {
                name: value,
                url: value,
              }),
            },
      )
    : [];

RestUpload.propTypes = {
  source: PropTypes.string,
  parentSource: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  multiple: PropTypes.bool,
  form: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultSourceKey: PropTypes.string,
  accept: PropTypes.string,
  required: PropTypes.bool,
  isGetName: PropTypes.bool,
  deleteAction: PropTypes.func,
  maxItems: PropTypes.number,
  deleteList: PropTypes.array,
  setDeleteList: PropTypes.func,
};

RestUpload.defaultProps = {
  multiple: true,
};

export default RestUpload;
