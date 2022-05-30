import styled from 'styled-components';

export const PrivateLayoutWrapper = styled.div`
  position: relative;
  .ant-layout .sider-section .ant-menu .ant-menu-item .ant-menu-item-icon {
    margin-right: 20px;
  }
  
  .anticon {
    padding-right: 0 !important;
  }

  .page-content {
    overflow-x: hidden;
  }

  .page-loading {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    background: #00000020;
    display: flex;
    align-items: center;
    justify-content: center;

    .ant-spin {
      font-weight: 600;
      font-size: 22px;
      &.ant-spin-lg .ant-spin-dot {
        font-size: 42px;
      }
    }
  }
`;
