import styled from 'styled-components';
import { Row } from 'antd';

export default styled(Row)`

  .left-section {
    .upload-file-wrapper {
      margin-bottom: 8px;
    }
  }

  .program-section {
    background: #fff;
    box-shadow: 0px 20px 40px rgba(3, 0, 77, 0.06);
    border-radius: 8px;
    overflow: hidden;

    .header-section {
      font-weight: 800;
      color: ${({ theme }) => theme.palette.secondary};
      font-size: 20px;
      padding: 14px 20px;
      border-bottom: 1px solid ${({ theme }) => `${theme.palette.secondary}10`};
    }

    .form-content {
      padding: 20px;
    }

    .form-counter {
      font-weight: 800;
      color: ${({ theme }) => theme.palette.secondary};
    }
  }

  .phase-section {
    .header-section {
      position: relative;
    }
    .form-content {
      padding: 0;
    }
  }

  .input-addition-card {
    margin-bottom: 24px;
    border: none;
    padding: 20px;

    .add-btn {
      position: absolute;
      top: -49px;
      right: 20px;
      width: auto !important;
    }

    .ant-card-body {
      padding: 0;
    }

    .btn-remove {
      margin-top: 0;
      padding-top: 0;
    }
  }
`;