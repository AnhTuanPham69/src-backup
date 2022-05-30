import styled from 'styled-components';
import { Card } from 'antd';

export const CardWrapper = styled(Card)`
  border: none;

  .ant-card-extra {
    width: 100%;

    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      h3 {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
      }
    }

    .ant-btn {
      background: transparent;
      border: none;
    }
  }

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
  }

  .ant-upload {
    margin-top: 10px;
  }
  .ant-card-extra {
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

  .ant-input,
  .ant-select,
  .ant-input-number-input,
  .tox-edit-area {
    pointer-events: none !important;
  }
  ${
    '' /* 
  .ant-form-item-required::before {
    display: none;
  } */
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }

  .ant-input-number-handler-wrap,
  .ant-select-arrow {
    display: none;
  }

  .tox-editor-container {
    border-bottom: 1px solid #e2e3e5;
    .tox-editor-header {
      display: none;
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

export const CreateWrapper = styled.div`
  @media (max-width: 550px) {
    h1 {
      padding: 0px 15px 10px 15px;
    }
  }

  .ant-btn {
    font-size: 20px;
  }
`;
