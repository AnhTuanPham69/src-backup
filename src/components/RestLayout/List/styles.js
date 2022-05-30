import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* .table-content > .viewContent {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 20px;
    box-shadow: ${({ theme }) => theme.card.shadow};
    background: #fff;
  } */}
  .ant-table {
    box-shadow: ${({ theme }) => theme.card.shadow};
  }
  .viewContent {
    width: 100%;

    .ant-form {
      background: transparent;
      .filterContainer {
        background: transparent;
      }
    }
  }
  .paginationRow {
    padding: 0px;
  }

  ${
    '' /* .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus-visible .ant-pagination-item-link {
    color: #00537a;
    border-color: #00537a;
    cursor: not-allowed;
  }

  .ant-pagination-item-active {
    background: #fff;
    border-color: #00537a;

    a {
      color: #fff !important;
      background: #00537a;
      border-radius: 5px;
    }
  }

  .ant-pagination-next .ant-pagination-item-link {
    background-color: #fff;
    border: 1px solid #00537a;
    color: #00537a;
  } */
  }

  ${
    '' /* .ant-select-arrow,
  .ant-select-selection-item {
    color: ${({ theme }) => theme.palette.secondary};
  } */
  }

  .ant-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  .ant-pagination-total-text {
    display: flex;
    align-items: center;
  }
  .ant-pagination-options {
    height: inherit;
  }
  .ant-select-arrow {
    right: 6px;
  }
  ${
    '' /* .ant-pagination-options-quick-jumper {
    font-weight: 300;
    font-size: 14px;
    line-height: inherit;
    height: inherit;
  }
  .ant-pagination-options-quick-jumper input {
    height: auto;
    border: 1px solid #d9d9d9;
  } */
  }
  .ant-select-selection-selected-value {
    font-weight: 300;
    font-size: 14px;
  }
  ${
    '' /* .ant-pagination-item {
    font-weight: 300;
    font-size: 14px;
    border-color: #00537a;

    a {
      color: #00537a;
    }
  } */
  }

  .box {
    padding: 0px;
    border: 0px;
    border-radius: 5.5px;
    margin-bottom: 0;
  }
  .txtTotal {
    font-weight: normal;
  }
  .item {
    background: ${({ theme }) => theme.background.content};
    margin-bottom: 3px;
    border-radius: 4px;
    .ant-list-item-content {
      padding: 15px;
    }
  }
  .ant-table-body {
    overflow-x: auto !important;
  }
  .table-content {
    border-radius: 8px;
    border: none;
    padding-bottom: 20px;
  }
  .vActions {
    display: flex;
    ${'' /* display: none; */}
    margin-bottom: 20px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .ant-select-selection--single {
    height: 32px;
  }
  .ant-select-selection__rendered,
  .ant-select-selection-selected-value {
    line-height: 32px;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    .ant-card-body .title {
      margin-right: 15px;
      width: 30%;
    }
    .ant-card-body .ant-col {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
    }
  }
  .ant-list {
    margin-top: 0 !important;
    .ant-col {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .ant-list-item {
      flex: 1;
    }
  }
`;
