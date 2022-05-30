import styled from 'styled-components';

export const CurrentProgramsWrapper = styled.div`
  border-radius: 8px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
  }
  .header-section {
    .selector-section {
      display: flex;
    }
    .phase-selector {

      .current-title {
        padding-right: 10px;
        width: 142px;
        font-weight: bold;
      }
      position: absolute;
      right: 0px;
      top: 0;
      max-width: 410px;
      display: flex;
      align-items: center;

      .ant-select-selector {
        background: #ffb21d;
        border: none;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .ant-select-selection-item,
      .ant-select-arrow {
        color: #fff;
      }

      .ant-select-selection-item {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .content-section {
    .ant-spin {
      width: 100%;
      height: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    h3 {
      padding: 10px 20px;
    }

    .table-content {
      border: none;

      .vActions {
        display: none;
      }
    }
  }
`;
