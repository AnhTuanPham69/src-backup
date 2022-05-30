import styled from 'styled-components';
import { Drawer } from 'antd';

export const DrawerWrapper = styled(Drawer)`
  .ant-drawer-header {
    .ant-drawer-title {
      font-weight: 600;
    }
  }
  .ant-drawer-body {
    padding: 15px;
    height: 100%;

    & > div {
      padding: 0;
    }

    .viewContent {
      padding: 0;
      .table-content {
        padding: 10px;
        border: none;
        .vActions {
          display: none;
        }
      }
    }
  }
`;
