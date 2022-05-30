import styled from 'styled-components';

export const ListStepItemsWrapper = styled.div`
  height: 100%;
  ${'' /* display: flex;
  flex-direction: column; */}
  padding: 20px;
  ${'' /* margin-top: -60px; */}

  .header-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;

    .header {
      font-weight: 600;
    }
    .ant-btn {
      margin: 0;
      margin-left: 10px;
    }
  }

  .ant-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
  }

  .svgIcon {
    padding-right: 5px;
  }

`