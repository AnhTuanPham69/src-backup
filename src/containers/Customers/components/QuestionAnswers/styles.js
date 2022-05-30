import styled from 'styled-components';
import { Menu } from 'antd';

export const QuestionAnswersWrapper = styled.div`
  .answer-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 8px 0px;

    svg {
      margin-left: 8px;
    }
  }

  p, a {
    margin: 0;
  }

  .name {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #19a4e5;
    max-width: 250px;
    flex-grow: 2;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .date {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    padding-top: 2px;
    min-width: 110px;
    text-align: right;
  }
`;

export const MenuWrapper = styled(Menu)`
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover {
    background-color: #fff7e8;
    color: #f5a303;
  }
`;
