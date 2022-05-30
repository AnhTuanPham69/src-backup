import styled from 'styled-components';

export const OrderSummaryWrapper = styled.div`
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    color: #454b60;
  }

  .box-time {
    border-radius: 8px;
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.palette.primary};
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      margin-bottom: 6px;
    }
    .time-row {
      display: flex;
      align-items: center;

      .anticon {
        color: ${({ theme }) => theme.palette.primary};
      }

      p {
        padding-left: 10px;
      }
    }
  }

  .ant-divider {
    width: auto;
    min-width: auto;
    flex-grow: 2;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #4f4f4f;
  }

  .name {
    h3 {
      color: #030610;
    }
  }
`;
