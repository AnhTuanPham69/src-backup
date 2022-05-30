import styled from 'styled-components';

export const CoachSummaryWrapper = styled.div`
  .user-section,
  .description-section {
    background: #fff;
    border-radius: 8px;
    ${'' /* box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.06); */}
  }

  .user-section {
    margin-bottom: 24px;
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      padding: 20px;
      color: #454b60;
    }
  }

  .description-section {
    padding: 20px;
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      color: #4f4f4f;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      color: #4f4f4f;
      margin-bottom: 0;
    }
  }
`;
