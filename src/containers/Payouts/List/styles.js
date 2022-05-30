import styled from 'styled-components';

export const PayoutListWrapper = styled.div`
  .svgIcon { 
    svg {
      color: ${({theme}) => theme.background.headerTable};
      path {
        stroke: ${({theme}) => theme.background.headerTable};
      }
    }
  }
  .header-btn {
    display: flex;
    /* width: 100%; */
    justify-content: flex-end;
    float: right;
    margin-left: 10px;
  }
`;
