import styled from 'styled-components';
import Card from 'antd/lib/card';

export const InfoCardWrapper = styled(Card)`
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.06);
  border: none;
  border-radius: 8px;
  padding: 0px;

  .disable {
    display: none;
  }

  .ant-card-body {
    padding: 32px 24px;
  }

  .header-section {
    display: flex;
    position: relative;
    justify-content: center;
    ${'' /* margin: 24px; */}
    margin-bottom: 0;
    .back-btn {
      position: absolute;
      left: 0;
      border: none;
      padding: 0;
      box-shadow: none;
      font-size: 20px;
    }

    .overview {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding-bottom: 15px;
      .img {
        width: 80px;
        height: 80px;
        border-radius: 100px;
        object-fit: contain;
      }

      h3 {
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        ${'' /* padding-bottom: 16px; */}
        padding-top: 24px;
      }
    }

    .edit-btn {
      position: absolute;
      right: 0;
      border: none;
      padding: 0;
      box-shadow: none;
      font-size: 20px;

      .img {
        width: 20px;
      }
    }
  }

  .contents-section {
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      ${'' /* padding-bottom: 10px; */}
      color: #030610;
      padding-top: 10px;
    }

    p {
      text-overflow: ellipsis;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }

    .row {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      width: 100%;

      a {
        text-overflow: ellipsis;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 10px;
      }
    }

    .row-line {
      justify-content: space-between;
      &.row {
        padding-bottom: 0;
      }
    }

    .anticon {
      font-size: 18px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      padding-left: 10px;
      color: #030610;
      margin: 0;
    }
  }
`;
