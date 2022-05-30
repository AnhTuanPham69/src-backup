import styled from 'styled-components';

export const DetailWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
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

    span:last-child {
      color: rgb(5 36 123 / 85%);
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none !important;
  }

  .detail-tabs {
    position: relative;
  }

  @media (max-width: 1470px) {
    .breadcrumb-section {
      .ant-breadcrumb {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 850px) {
    margin-left: 20px;
    margin-right: 20px;

    .breadcrumb-section {
      padding-bottom: 0px;
      .ant-breadcrumb {
        line-height: 25px;
        font-size: 20px;
      }
    }

  }
`;
