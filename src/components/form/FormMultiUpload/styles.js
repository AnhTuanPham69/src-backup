import styled from 'styled-components';
import { Modal } from 'antd';

export const FormMultiUploadWrapper = styled.div`
  height: calc(100% - 43px);
  padding: 0;
  & > span {
    height: 250px;
    display: flex;
    margin-bottom: 20px;
  }

  .ant-form-item-label {
    padding: 0;
  }

  .ant-form-item {
    margin-bottom: 8px;
  }

  .ant-upload-list {
    margin-left: 8px;
  }

  .file-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 10px;

    & > div {
      border: 1px solid #ddd;
      overflow: hidden;
      border-radius: 4px;
    }

    & > .name-file {
      ${'' /* margin-top: 10px; */}
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    .div-item-image {
      position: relative;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > i.icon-file {
        font-size: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ${'' /* border: 1px solid ${({ theme }) => theme.border.default}; */}
    }
    .error {
      color: ${({ theme }) => theme.color.red};
    }
  }

  .upload-file-wrapper {
    border: 1px solid #e2e3e5;
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 23px;

    .selectedImage {
      flex-grow: 1;
    }

    .ant-upload-text {
      ${'' /* display: flex; */}
      flex-wrap: wrap;
      justify-content: center;

      :hover {
        svg {
          path {
            fill: ${({ theme }) => theme.palette.primary};
          }
        }
      }

      .text {
        margin-top: 10px;
      }
    }
  }

  .ant-form-item-control-input {
    display: none;
  }
  .uploadArea {
    margin: auto;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    .anticon {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 60px !important;
    }
    color: ${({ theme }) => theme.text.secondary};
  }
  .ant-upload.ant-upload-drag {
    width: 100%;
    height: fit-content;
    ${'' /* position: absolute; */}
    background: transparent;
    border: 2px dashed #e2e3e5;
    color: ${({ theme }) => theme.text.secondary};
    top: 0;
    .ant-upload-drag-container {
      ${'' /* text-align: left;
      vertical-align: top; */}
      padding: 30px 0;
    }
    .overlayImage {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.background.loadingBackgroundColor};
      opacity: 0;
      transition: 300ms ease all;
      img {
        transition: 300ms ease all;
        width: 200px;
        height: 200px;
        object-fit: contain;
        transform: scale(0.5);
      }
    }
    &:hover {
      .uploadArea {
        .anticon {
          color: ${({ theme }) => theme.palette.primary};
        }
        color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
  .ant-upload.ant-upload-drag-hover {
    .overlayImage {
      opacity: 1;
      img {
        transform: scale(1);
      }
    }
  }

  .uploadImage {
    display: inline-flex;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    margin: 5px;
    position: relative;
    z-index: 2;
    background: ${({ theme }) => theme.background.content};
    .lbSetDefault {
      background: ${({ theme }) => theme.background.disabled};
      color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      cursor: pointer;
      visibility: hidden;
      &.active {
        visibility: visible;
        background: ${({ theme }) => theme.palette.primary};
      }
      &:hover {
        visibility: visible;
        background: ${({ theme }) => theme.palette.primary};
      }
    }
    .image {
      width: 100px;
      height: 100px;
      border-radius: 4px;
      background: ${({ theme }) => theme.background.loadingBackgroundColor};
    }
    .overlay {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 5px;
      bottom: 0px;
      width: 100px;
      height: 100px;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      visibility: hidden;
      &:hover {
        visibility: visible;
        & ~ .lbSetDefault {
          visibility: visible;
        }
      }
      .anticon {
        color: #fff;
        font-size: 24px;
        margin: 5px;
      }
    }

    &:hover {
      .overlay {
        visibility: visible;
      }
    }
    .image:hover ~ .overlay {
      visibility: visible;
    }
    .loading {
      position: absolute;
    }
  }
  .selectedImage {
    display: block;
    overflow-y: auto;

    &.has-image {
      min-height: 155px;
    }
  }
`;

export const ModalContentStyles = styled(Modal)`
  ${'' /* padding-top: 25px;
  margin-left: -24px;
  margin-right: -24px; */}
  height: 540px;

  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 530px;

  .ant-modal-close-x {
    .anticon {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }

  img {
    max-height: 530px;
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`;

export const ItemGridStyles = styled.div`
  flex-wrap: wrap;
  .thumbnail {
    width: 100%:
  }

  .images {
    display: flex;
  }

  .file-type {

    .anticon {
      color: #fff;
      font-size: 24px;
      margin: 5px;
    }

    .overlay2 {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 5px;
      bottom: 0px;
      width: 100px !important;
      height: 100px !important;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      visibility: hidden;
      &:hover {
        visibility: visible;
      }

      .anticon, .overlay-text {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    &:hover {
      .overlay2 {
        visibility: visible;
      }

      }

    span {
      ${'' /* position: absolute; */}
      background: transparent;
    }
  }

  .imageCount {
    width: 100px !important;
    height: 100px !important;
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
      width: 100px !important;
      height: 100px !important;
      display: flex;
      z-index: 2;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      visibility: hidden;
      &:hover {
        visibility: visible;
      }

      .anticon, .overlay-text {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    &:hover {
      .overlay2 {
        visibility: visible;
      }

      }

    span {
      background: transparent;
    }
  }

  .image {
    width: 100px !important;
    height: 100px !important;
    border-radius: 4px;
    object-fit: cover;
  }
`;
