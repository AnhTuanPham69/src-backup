import styled from 'styled-components';

export const ResourcesWrapper = styled.div`
  .ant-tabs-nav {
    display: none;
  }
  .header-section {
    .phase-selector {
      position: absolute;
      right: 0;
      top: 0;

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
`;
