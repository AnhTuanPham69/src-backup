import styled from 'styled-components';
import { Tabs } from 'antd';

export const TabWrapper = styled(Tabs)`
  background: #fff;
  border-radius: 8px;
  height: calc(100vh - 190px);
  .ant-tabs-tab {
    width: 100px;
    justify-content: center;
    padding: 15px;
    .ant-tabs-tab-btn {
      font-size: 18px;
      line-height: 22px;
    }
  }

  .table-content {
    border: none;
    padding: 0;
  }

  .list-col {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
