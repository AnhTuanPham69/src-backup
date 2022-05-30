import styled from 'styled-components';
import { Card } from 'antd';

export const CardWrapper = styled(Card)`
  border: none;
  .ant-card-head {
    background: #ffb21d70;
    .ant-card-head-wrapper {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      display: flex;
      flex-direction: row-reverse;
    }

    .ant-card-head-title {
      padding-right: 50px;
    }
  }s

  .ant-upload {
    margin-top: 10px;
  }
  .ant-card-extra {
    .ant-btn {
      background: transparent;
      border: none;
    }
  }

  .footer {
    .ant-row-end {
      justify-content: center;
    }
  }

  .ant-row-end {
    justify-content: center;
    .ant-btn {
      margin-bottom: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      height: auto;
    }
  }

  @media (max-width: 550px) {
    .ant-card-head {
      border-radius: 0;
    }

    .ant-card-head-title {
      padding-right: 22px;
    }
  }
`;