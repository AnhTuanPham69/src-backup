import styled from 'styled-components';

export const ServiceSummaryWrapper = styled.div`
  .description-section,
  .service-section {
    background: #fff;
    border-radius: 8px;
  }

  .description-section {
    padding: 20px;
    margin-bottom: 24px;
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      color: #4f4f4f;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      color: #4f4f4f;
      margin: 0;
    }
  }

  .service-section {
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      color: #454b60;
      padding: 20px;
      margin: 0;
    }
  }
`;
