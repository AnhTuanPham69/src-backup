import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { getImageUrl } from 'utils/tools';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import PreviewImage from '../PreviewImage';
import GridPhotosWrapper, { ModalWrapper } from './styles';

const GridPhotos = ({ images, width, height, maxPreview = 1 }) => {
  const carouselRef = useRef(null);
  const subImages = images ? [...images].splice(0, maxPreview) : [];

  const [previewVisible, setPreviewVisible] = useState(null);

  const handleCancel = () => {
    setPreviewVisible(null);
  };

  const onPreviewUI = (index) => {
    setPreviewVisible(true);
    setTimeout(() => {
      carouselRef.current && carouselRef.current.goTo(index);
    }, 10);
  };
  return (
    <GridPhotosWrapper width={width} height={height}>
      {subImages.slice(0, maxPreview - 1).map((data, index) => (
        <PreviewImage
          onPreview={() => onPreviewUI(index)}
          key={String(index)}
          src={getImageUrl(data)}
        />
      ))}
      {images && images.length - subImages.length >= 0 ? (
        <div className="imageCount">
          <img
            alt=""
            src={getImageUrl(subImages[subImages.length - 1])}
            role="presentation"
            onClick={() => onPreviewUI(0)}
            className="overlay2"
          />
          {images.length - subImages.length !== 0 && (
            <div
              role="presentation"
              onClick={() => onPreviewUI(0)}
              className="overlay2"
            >
              {`+${images.length - subImages.length}`}
            </div>
          )}
        </div>
      ) : null}

      <ModalWrapper
        visible={previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          draggable
          ref={carouselRef}
        >
          {images &&
            images.map((data, index) => (
              <div key={String(index)}>
                <img
                  alt="example"
                  style={{ width: '100%', height: '100%' }}
                  src={getImageUrl(data)}
                />
              </div>
            ))}
        </Carousel>
      </ModalWrapper>
    </GridPhotosWrapper>
  );
};

GridPhotos.propTypes = {
  images: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  maxPreview: PropTypes.number,
};
GridPhotos.defaultProps = {
  images: [],
  width: 100,
  height: 100,
};

export default GridPhotos;
