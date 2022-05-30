import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalWrapper = styled(Modal)`
  ${'' /* max-height: 90%; */}
  min-height: 30%;
  border-radius: 8px;
  overflow: hidden;

  .drawerContainer {
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    ${'' /* min-height: calc(100vh - 60px); */}
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }

  .ant-modal-content {
    border-radius: 8px;
    overflow: hidden;

    .ant-modal-body {
      background: #fff;

      .w-100 {
        width: 100%;
      }

      .modalTitleContent {
        background: ${({ theme }) => `${theme.palette.primary}60`};
      }

      .content-form {
        padding-bottom: 14px;
      }
    }
  }

  .ant-drawer-content-wrapper {
    min-width: 450px;
    .ant-drawer-body {
      padding: 0px;
      padding-top: 60px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .content {
        flex: 1;
        height: calc(100vh - 120px);
        overflow-y: auto;
      }
    }
    .ant-form {
    }
    .content-form {
      padding: 10px 24px;
      flex: 1;
    }
  }
  .ant-modal-header {
    background: ${({ theme }) => theme.background.content};
    border-bottom: 1px solid ${({ theme }) => theme.background.container};
    color: ${({ theme }) => theme.palette.primary};
  }
  .ant-modal-content {
    background: ${({ theme }) => theme.background.container};
    padding-top: 60px;
  }
  .ant-modal-title {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 35px;
  }
  
  ${'' /* .ant-input,
  .ant-select-selection,
  .ant-input-number,
  .ant-select-dropdown-menu-item,
  .ant-select-dropdown-menu,
  .ant-select-dropdown,
  .ant-select-clear-icon,
  .ant-select-selector,
  .ant-select-dropdown-menu-vertical {
    background: ${({ theme }) => theme.background.content} !important;
    border: 1px solid #e2e3e5;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid #e2e3e5;
    }
  }
  textarea {
    background: ${({ theme }) => theme.background.content};
    border: 1px solid #e2e3e5;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid #e2e3e5;
    }
  }
  .ant-select-selection__clear {
    background-color: transparent;
    color: white;
    border-radius: 5px;
  }
  .ant-select-arrow-icon {
    background-color: transparent;
  } */}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .ant-modal-footer {
    border-top: 1px solid ${({ theme }) => theme.background.container};
  }

  .ant-modal-body {
    padding: 10px 24px;
  }

  .ant-tabs-bar {
    font-weight: 500;
  }
  .ant-tabs-nav {
    .ant-tabs-tab {
      padding-bottom: 5px;
    }
  }
  .ant-tabs-tab {
    font-family: Roboto;
    color: ${({ theme }) => theme.text.tabTitle};
  }
  .ant-list {
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 460px;
  }
  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    position: absolute;
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  .ant-list-split .ant-list-item {
    border-bottom: none;
    padding: 1px 0px;
  }
  .ant-list-empty-text {
    color: ${({ theme }) => theme.text.empty};
  }
  .modalTitleContent {
    background: ${({ theme }) => theme.background.gray};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #e2e3e5;
    .modalBtnBack {
      margin: 0px 24px;
      color: ${({ theme }) => theme.drawer.closeIcon};
    }
    .modalTitle {
      flex: 1;
      font-size: 20px;
      text-align: center;
      color: ${({ theme }) => theme.drawer.headerTitle};
      padding-left: 50px;
    }
  }

  .ant-form-item {
  }
  .ant-form-item-control {
    line-height: 2;
  }
  .txtTitle {
    font-size: 12px;
  }
  .ant-form-item-label {
    line-height: 1.5em;
    padding-bottom: 5px;
  }
  .ant-input-number {
    width: 100%;
  }
  .txtTitleForm {
    color: ${({ theme }) => theme.text.formLabel};
    font-size: 12px;
  }
`;
