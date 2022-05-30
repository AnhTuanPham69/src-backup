import styled from 'styled-components';
import { Menu, Card } from 'antd';

export const StepItemWrapper = styled(Card)`
  margin-bottom: 20px;
  box-shadow: 0px 2px 12px rgba(0,0,0,0.06);
  border: none;

  .actions-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    padding-left: 15px;
  }

  .step-row {
    display: flex;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: flex-start;
    border-radius: 7px;

    background-color: #F4F8FA;

    svg {
      width: 8px;
      height: 8px;
      margin-top: 7px;
    }

    p {
      margin: 0;
      ${'' /* word-break: break-all; */}
    }
  }
  .header-section {
    display: flex;
    align-items: center;

    .ant-btn {
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-left: 10px;
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 21px;
      flex-grow: 1;
      margin: 0;
      ${'' /* word-break: break-all; */}
    }
  }
`;

export const MenuWrapper = styled(Menu)`
  border-radius: 8px !important;
  overflow: hidden;
  &.ant-dropdown-menu {
    padding: 0 !important;
    margin: 0;
  }
  .ant-dropdown-menu-item {
    padding: 0 !important;
    margin: 0 !important;
  }

  .ant-btn {
    padding: 10px 12px;
    height: auto;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 0;
    width: 100%;
    box-shadow: none;
    span {
      padding-right: 5px;
    }
    .anticon {
      font-size: 20px;
    }
  }

  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    background: #fff0d2;

    svg > path {
      fill: #ffb21d;
    }
  }
`;
