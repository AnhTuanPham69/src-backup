import styled from 'styled-components';
import { Table } from 'antd';
import Icon from '@ant-design/icons';

export const HeaderTableWrapper = styled.input`
  background: transparent;
  border: 1px dashed transparent;
  transition: all 0.3s;
  padding-left: 5px;
  transform: translate(-5px, 0px);
  text-transform: uppercase;
  &:hover {
    border: 1px dashed ${({ theme }) => theme.border.default};
  }
  &:focus {
    border: 1px dashed ${({ theme }) => theme.palette.primary};
    outline: none;
    background: ${({ theme }) => theme.background.content};
    transform: translate(0px, 0px);
  }
  &:disabled {
    border: 1px dashed transparent;
  }
  .highlightFilter {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const IconWrapper = styled(Icon)`
  &.highlightFilter {
    color: ${({ theme }) => theme.palette.primary} !important;
  }
`;

export const DropdownStyles = styled.div`
  .search-button {
    i {
      color: white;
    }
  }
`;

export const TableStyles = styled(Table)`
  .ant-table-content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .header-table-title {
    .anticon {
      padding-left: 10px;
    }
  }

  .ant-table-thead {
    ${
      '' /* .ant-table-column-has-sorters {
      padding-left: 0px;

      .ant-table-column-sorters {
        padding-left: 10px;
      }
    } */
    }

    .ant-table-cell-fix-right {
      padding-left: 20px;
    }
  }

  .ant-table-tbody > tr:last-child > td {
    border: none !important;
  }
  .ant-table-tbody > tr {
    font-size: 12px;
  }

  .ant-table-tbody {
    .ant-table-row-expand-icon {
      border-radius: 0px;
    }
  }

  .active > td {
    background: #fff0d2;
  }

  .ant-table-tbody > .active:hover > td {
    background: #fff0d2;
  }

  .ant-table-tbody {
    .ant-table-cell {
      padding-left: 10px !important;

      p {
        margin: 0;
      }
    }
    .ant-table-cell.ant-table-cell-fix-right.ant-table-cell-fix-right-first {
      padding-right: 0 !important;
    }
  }
`;
