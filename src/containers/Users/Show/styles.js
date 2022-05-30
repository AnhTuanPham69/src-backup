import styled from 'styled-components';

export const UsersShowWrapper = styled.div`
  .header {
    font-size: 24px;
    font-weight: 600;
    line-height: 38px;
  }

  .ant-tabs-nav {
    margin: 0;

    .ant-tabs-tab-btn {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
    }
  }

  .ant-tabs-nav-wrap::before {
    display: none;
  }
`;
