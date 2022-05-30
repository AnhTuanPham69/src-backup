import styled from 'styled-components';

export const WeeksColumnWrapper = styled.div`
  background: ${({ theme }) => theme.background.headerTable};;
  border-radius: 8px;
  width: fit-content;
  padding-top: 10px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 190px);
  width: 100%;

  .content-section {
    overflow-y: auto;
    width: 100%;

    p {
      word-break: break-all;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
    border-bottom: 1px solid #ededed;
    padding-bottom: 15px;
    margin: 0;
    padding-top: 5px;
  }
  .wrap {
    padding: 10px;
    border-bottom: 1px solid #ededed;

    & > div {
      align-items: flex-start;
    }
  }

  .selected {
    background: #fff0d2;
  }
  .week-line {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 12px 0px;
    border-radius: 12px;
    justify-content: space-between;

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      margin-right: 5px;
      margin-left: 5px;
      flex-grow: 2;
      text-align: center;
    }
  }

  .active-line,
  .week-line:hover,
  .week-line:active {
    background: #fff0d2;
  }
  .btn-wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
  }

  .ant-btn {
    padding: 12px;
    border-radius: 8px;
    height: auto;
    width: calc(100% - 20px);
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-dropdown-trigger: hover {
    path {
      stroke: #ffb21d;
    }
  }
`;

export const MenuWrapper = styled.div`
  box-shadow: 0px 6px 18px rgba(144, 164, 183, 0.22);
  border-radius: 12px;
  overflow: hidden;
  ${'' /* background: ${({ theme }) => theme.background.headerTable}; */}
  width: 350px;
  padding: 20px;
  background: ${({ image }) =>
      image
        ? `linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url(${image})`
        : `rgba(0, 0, 0, 0.7)`};
  background-position: center;
  background-size: cover;

  .header-dropdown, .header-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-dropdown{
    margin-bottom: 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: ${({ theme }) => theme.background.headerTable};;
  }

  .name {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: ${({ theme }) => theme.background.headerTable};;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.background.headerTable};
  }
  .header-btn {
    width: 50px;
  }

  .ant-btn {
    height: auto;
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    padding: 0;
    background: transparent;
    color: ${({ theme }) => theme.background.headerTable};
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    svg > path {
      fill: ${({ theme }) => theme.background.headerTable};
    }
  }
`;
