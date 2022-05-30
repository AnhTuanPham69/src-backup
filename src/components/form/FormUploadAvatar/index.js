import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import imageCompression from 'browser-image-compression';
import { Upload, Avatar, Progress, Form, Input, notification } from 'antd';
import I18n from 'i18next';
import { CameraOutlined } from '@ant-design/icons';
import { getUrl, uploadMedia, deleteFile } from 'api/uploadMedia';
import { getImageUrl } from 'utils/tools';
import AvatarCropperModal from './AvatarCropperModal';
import UploadImageWrapper from './style';

const uploadUrl = `${process.env.REACT_APP_SERVER_URL}/uploadFile`;
const FormItem = Form.Item;

// const confirm = Modal.confirm;

class UploadImage extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (
      get(nextProps.record, nextProps.source) !== prevState.prevRecordImgSource
    ) {
      return {
        prevRecordImgSource: get(nextProps.record, nextProps.source),
        imgDisplay:
          get(nextProps.record, nextProps.source) || nextProps.defaultValue,
      };
    }
    return {};
  };

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      // eslint-disable-next-line
      prevRecordImgSource:
        get(this.props.record, this.props.source) || undefined,
      imgDisplay: get(this.props.record, this.props.source) || undefined,
      loading: false,
      loadingProgress: 0,
      isShowCropperModal: false,
      hasErr: false,
    };
  }

  // componentDidMount() {
  //   window.addEventListener('beforeunload', this.onUnload);
  //   // this.onLoad();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.onUnload);
  // }

  // onLoad = () => {
  //   const getUrl = localStorage.getItem('url');
  //   if (getUrl) {
  //     this.onRemove(getUrl);
  //   }
  // };

  onUnload = (e) => {
    if (this.state.imgDisplay && this.props.form) {
      localStorage.setItem('url', this.state.imgDisplay);
      // eslint-disable-next-line
      e.returnValue = '';
    }
  };

  onHideCropperModal = () => {
    this.setState({
      isShowCropperModal: false,
    });
  };

  onChangePreview = async ({ croppedFile }) => {
    try {
      const { onChange, source, form } = this.props;
      if (this.state.imgDisplay) {
        this.onRemove(this.state.imgDisplay);
      }
      this.setState({
        isShowCropperModal: false,
        loading: true,
      });

      // const formData = new FormData();
      // formData.append('type', 'image');
      // formData.append('images', croppedFile);
      const responseS3 = await getUrl(croppedFile.name, croppedFile.type);
      const response = await uploadMedia(responseS3.uploadUrl, croppedFile);
      // const response = await uploadMediaImgur(croppedFile);
      // const response = await uploadImages(formData);
      const imgDisplay = responseS3.url; // response?.data?.link;
      this.setState({
        imgDisplay,
        loading: false,
        hasErr: false,
      });
      onChange && onChange({ key: source, data: imgDisplay });
      form &&
        form.setFieldsValue({
          [source]: imgDisplay,
        });
      return response;
    } catch (error) {
      notification.error({
        title: 'Error',
        message:
          error && error.message
            ? error.message
            : 'Server Internall Error. Please try later !!!!',
        position: 'tr',
        autoDismiss: 15,
      });
      this.setState({
        file: null,
        imgDisplay: null,
        loading: false,
        hasErr: true,
        loadingProgress: 0,
      });
      return error;
    }
  };

  onRemove = async (url) => {
    await deleteFile(url);
    this.setState({
      file: null,
      imgDisplay: null,
      loading: false,
      loadingProgress: 0,
    });
    localStorage.removeItem('url');
  };

  

  renderImage() {
    const { style, defaultText, defaultIcon, defaultValue } = this.props;
    const { loading, imgDisplay, hasErr } = this.state;
    if (loading) {
      return (
        <Avatar style={style}>
          <Progress percent={this.state.loadingProgress} showInfo={false} />
          <div style={{color: '#16457B', marginTop: 20}}>{I18n.t('upload.uploading')}</div>
        </Avatar>
      );
    }
    if (!imgDisplay) {
      return (
        <Avatar
          icon={defaultIcon}
          src={defaultValue}
          style={style}
        >
          <span className="default-image">{defaultText}</span>
        </Avatar>
      );
    }

    if (!hasErr) {
      return <Avatar src={getImageUrl(imgDisplay)} style={style} />;
    }

    return (
      <Avatar src={getImageUrl(imgDisplay)} style={style}>
        <Progress
          percent={this.state.loadingProgress}
          showInfo={false}
          status="exception"
        />
        <div className="ant-upload-text">{I18n.t('upload.failed')}</div>
      </Avatar>
    );
  }

  render() {
    const {
      hasCrop,
      source,
      style,
      className,
      label,
      defaultValue,
      cropDimension,
      header,
      height,
      width,
    } = this.props;
    const { imgDisplay } = this.state;
    const props = {
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: async (file) => {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        }
        const compressedFile = await imageCompression(file, options);
        compressedFile.lastModifiedDate = new Date();
        compressedFile.name = file.name;

        this.setState(() => ({
          file: compressedFile,
          isShowCropperModal: hasCrop,
        }));
        if (!hasCrop) {
          this.onChangePreview({ croppedFile: compressedFile });
        }
        return false;
      },
    };

    return (
      <UploadImageWrapper width={width} height={height} className={className}>
        <FormItem
          {...(label || header) && {
            label: I18n.t(label || header),
          }}
        >
          
          <Upload {...props} accept="image/*">
            <div className="image-uploader">
              {this.renderImage()}
              <div className="image-hover" style={style}>
                <CameraOutlined className="image-hover-icon" />
              </div>
            </div>
          </Upload>
          <AvatarCropperModal
            cropDimension={cropDimension}
            isShowModal={this.state.isShowCropperModal}
            onHideModal={this.onHideCropperModal}
            onChangePreview={this.onChangePreview}
            image={this.state.file}
          />
          <Form.Item
            name={source}
            initialValue={imgDisplay || defaultValue}
            className="form-upload-hidden"
            rules={[
              {
                required: this.props.required,
                message: I18n.t('error.required'),
              },
            ]}
          >
            <Input style={{ display: 'none' }} />
          </Form.Item>
        </FormItem>
      </UploadImageWrapper>
    );
  }
}

UploadImage.propTypes = {
  showErrorMsg: PropTypes.func,
  form: PropTypes.object,
  source: PropTypes.string,
  record: PropTypes.object,
  style: PropTypes.object,
  defaultText: PropTypes.string,
  defaultIcon: PropTypes.node,
  onUploadImage: PropTypes.func,
  className: PropTypes.string,
  cropDimension: PropTypes.object,
  hasCrop: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  header: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

UploadImage.defaultProps = {
  hasCrop: true,
  height: 80,
  width: 80,
};

export default UploadImage;
