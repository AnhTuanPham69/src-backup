import { Modal } from 'antd';
import styled from 'styled-components';

const GridPhotosWrapper = styled.div`
  flex-wrap: wrap;
  .thumbnail {
    width: 100%:
  }

  .images {
    display: flex;
  }

  .imageCount {
    width: ${({ width }) => `${width}px`} !important;
    height: ${({ height }) => `${height}px`} !important;
    border-radius: 4px;
    position: relative;
    display: inline-block;
    .overlay {
      position: absolute;
      background: rgba(0,0,0, 0.4);
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      color: white;
      align-items: center;
      justify-content: center;
      display: flex;
      font-size: 20px;
      border-radius: 4px;
    }

    .overlay2 {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 5px;
      bottom: 0px;
      width: ${({ width }) => `${width}px`} !important;
      height: ${({ height }) => `${height}px`} !important;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      visibility: visible;
      color: white;
      font-size: 24px;
      cursor: pointer;
      &:hover {
      }
      .anticon {
        color: #fff;
        font-size: 30px;
      }
    }
    &:hover {
      .overlay2 {
        visibility: visible;
      }

      }

    span {
      position: absolute;
      background: transparent;
    }
  }

  .image {
    width: ${({ width }) => `${width}px`} !important;
    height: ${({ height }) => `${height}px`} !important;
    border-radius: 4px;
  }
`;

export const ModalWrapper = styled(Modal)`
  .ant-modal-body {
    overflow-y: unset;
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    font-size: 20px;
    color: #000;
  }

  .ant-carousel .slick-prev::before,
  .ant-carousel .slick-next::before {
    display: none;
  }

  .ant-modal-close-x {
    width: 34px;
    height: 34px;
    line-height: 34px;
  }
`;
export default GridPhotosWrapper;
