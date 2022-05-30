import styled from 'styled-components';

export const QuestionsDetailWrapper = styled.div`
  background: #fff;
  position: relative;
  border-radius: 8px 8px 0px 0px;

  .down-btn {
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;
    padding-left: 25px;
    padding-right: 25px;
  }

  .ant-card-head {
    background: #fff7e8;
    border-radius: 8px 8px 0px 0px;
    border: none;
    .anticon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .ant-card-body {
    padding-left: 30px;
    padding-right: 30px;
  }

  .ant-card-head-wrapper {
    flex-direction: row-reverse;

    .ant-btn {
      border: none;
      box-shadow: none;
      padding-left: 0;
      font-size: 20px;
      background: transparent;
    }

    .ant-card-head-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
  }

  .answer-row {
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      color: #454b60;
      padding-left: 20px;
    }
  }
`;
