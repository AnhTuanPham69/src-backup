import styled from 'styled-components';

export default styled.div`
  height: 100%;

  .form {
    padding: 24px;
    height: 100%;
    overflow-y: auto;
    .ant-form-item-label {
      label {
        color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
  .txtToolTitle {
    padding: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.border.default};
    .txtTitle {
      flex: 1;
    }
  }
  .ant-layout-sider {
    height: 100vh;
    background: ${({ theme }) => theme.background.content};
    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
  }
  .panel {
    border-radius: 0px;
  }
  .ant-collapse {
    margin-bottom: 15px;
  }
  .preview {
    flex: 1;
    position: relative;
  }
  .normal {
    width: 50vw;
  }
  .fullScreen {
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    flex: 0;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 999;
    overflow-y: scroll;
    .previewSection {
      border: none;
    }
    .ant-layout-content {
      margin: 0px;
    }
  }
  .btnPreviewType {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .btnMobileView {
    position: fixed;
    bottom: 20px;
    right: 70px;
  }
  .mobile {
    width: 375px;
    max-width: 375px;
    margin: auto;
    .main-content,
    .container {
      width: 375px;
      max-width: 375px;
    }
  }
`;
