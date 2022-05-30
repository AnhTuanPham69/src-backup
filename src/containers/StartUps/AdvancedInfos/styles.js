import styled from 'styled-components';

export const AdvancedInfoWrapper = styled.div`
  .ant-tabs-nav {
    display: none;
  }

  .ant-select {
    max-width: 200px;
    .ant-select-selector {
      background: #ffb21d !important;
      border: none !important;
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
`;
