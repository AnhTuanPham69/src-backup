import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  .breadcrumb-section {
    padding-bottom: 20px;
    .ant-breadcrumb {
      line-height: 29px;
      font-size: 24px;
      font-weight: 600;

      a {
        color: #000 !important;
      }
    }

    .ant-breadcrumb-separator {
      color: #000 !important;
    }

    span:last-child > span > a {
      color: rgb(5 36 123 / 85%) !important;
    }
  }

  .content-history {
    background: #fff;
    border-radius: 8px;
    height: fit-content;
    width: calc(100% - 8px);
    width: 100%;
  }

  .header-history {
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    padding: 20px;
    margin: 0;
  }
  
  .header-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
