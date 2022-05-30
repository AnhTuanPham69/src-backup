import styled from 'styled-components';

export const PhaseRowWrapper = styled.div`
  .phase-card {
    width: 100%;
    background: ${({ theme }) => theme.background.content};
    padding: 20px;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 6px 18px rgba(144, 164, 183, 0.22);
    margin-bottom: 20px;
    .phase-title {
      display: flex;
      align-items: baseline;

      h3 {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color:  ${({ theme }) => theme.palette.primary}
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        color: #16457B;
      }
    }

    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .desc-row {
      width: 100%;

    }

    .footer-section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price-section {
        color: ${({ theme }) => theme.palette.secondary};
        font-weight: 800;

        .price {
          font-size: 20px;
        }
      }
    }
    .btn-row {
      display: flex;
      justify-content: space-between;
      ${'' /* align-items: flex-end; */}

      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        margin-right: 20px;
      }

      .ant-btn {
        color: #16457B;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 10px;
        border: none;
        padding: 0;

        .anticon {
          svg {
            width: 20px;
            height: 20px;
          }
        }

        .anticon:hover {
          color: ${({ theme }) => theme.palette.primary}
        }
      }
    }
  }
`;
