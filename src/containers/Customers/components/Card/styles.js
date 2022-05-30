import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  .header-section {
    padding: 16px;
    background: #fff7e8;
    ${'' /* border-top-left-radius: 8px;
    border-top-right-radius: 8px; */}
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      margin: 0;
    }
  }

  .content-section {
    padding: 10px 15px;
    background: #fff;
  }
`;
