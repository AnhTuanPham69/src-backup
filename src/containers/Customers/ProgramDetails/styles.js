import styled from 'styled-components';
import { Tabs } from 'antd';

export const TabWrapper = styled(Tabs)`
  background: transparent;
  border-radius: 8px;
  height: calc(100vh - 190px);

  .vActions {
    display: none;
  }

  .ant-tabs-tab {
    width: 100px;
    justify-content: center;
    padding: 15px;
    border-color: #ffff;
    .ant-tabs-tab-btn {
      font-size: 18px;
      line-height: 22px;
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before {
    display: none;
  }

  .ant-tabs-nav {
    margin: 0;
  }

  .table-content {
    border: none;
    padding: 0;
  }

  .list-col {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const BreadcrumbWrapper = styled.div`
  .ant-breadcrumb {
    .ant-breadcrumb-separator {
      font-size: 24px !important;
    }
  }
`;
