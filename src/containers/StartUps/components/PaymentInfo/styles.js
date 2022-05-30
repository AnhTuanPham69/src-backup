import styled from 'styled-components';

export const PaymentInfoWrapper = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
  }

  .payment-type {
    justify-content: space-between;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    padding-left: 10px;
  }

  & > div {
    margin-bottom: 10px;
    div {
      display: flex;
      align-items: center;
      ${'' /* margin-bottom: 5px; */}

      svg {
        width: 15px;
        height: 15px;
      }
    }
  }

`;
