import styled, { createGlobalStyle } from 'styled-components';
import { CLASS_UTILITY } from 'utils/css';

const AppWrapper = styled.div`
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  ${
    '' /* input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  } */
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${CLASS_UTILITY}
  .note {
    font-size: 12px;
    color: ${({ theme }) => theme.text.note};
  }
  .black {
    color: ${({ theme }) => theme.text.primary};
  }
  & > * {
    font-family: 'Inter', sans-serif;
  }
  .anticon:before {
    display: block;
    font-family: 'anticon', 'duc-tri-dashboard' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'duc-tri-dashboard' !important;
  }

  img {
    object-fit: contain;
  }

  .table-title-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-headerTable {
    color: ${({ theme }) => theme.palette.headerTable};
  }
  .bg-primary {
    background: ${({ theme }) => theme.background.primary};
  }
  .bg-warning {
    background: ${({ theme }) => theme.background.warning};
  }
  .bg-error {
    background: ${({ theme }) => theme.background.error};
  }
  .t-14px-1\\.57 {
    font: normal normal 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .t-500-14px-1\\.57 {
    font: normal 500 14px/1.57 ${({ theme }) => theme.fonts.primary};
  }
  .t-500-16px-1\\.5 {
    font: normal 500 16px/1.5 ${({ theme }) => theme.fonts.header};
  }
  .t-500-24px-1\\.17 {
    font: normal 500 16px/1.17 ${({ theme }) => theme.fonts.header};
  }
  .ml-8px {
    margin-left: 8px;
  }
  .ant-card-body {
    padding-top: 20px
  }

  .ant-btn > span {
    font-weight: 600 !important;
  }

  /* ------------------ Override antd---------------- */
  .ant-pagination .ant-pagination-item-active a {
    color: #ffffff;
  }

  .ant-pagination-disabled:hover a, .ant-pagination-disabled a {
    color: rgba(0,0,0,.4);
    border-color: rgba(212,210,244,.31);
    cursor: not-allowed;
  }
  .ant-pagination-prev .ant-pagination-item-link > .anticon, .ant-pagination-next .ant-pagination-item-link > .anticon {
    display: block;
  }

  .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before{
    content: none !important;
  }

  .ant-table-thead > tr > th {
    font-size: 11px !important;
    font-weight: 600 !important;
    border-bottom: none;
    text-transform: uppercase;
  }

  .ant-table-thead > tr > th:not(.ant-table-cell-fix-right) {
    background: ${({ theme }) => `${theme.palette.primary}20`} !important;
  }

  th.ant-table-cell-fix-right {
    background: #fff !important;
    &:before {
      background: ${({ theme }) => `${theme.palette.primary}20`} !important;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      content: '' !important;
      z-index: -1;
    }
  }
  

  .ql-editor {
    min-height: 200px;
  }

  .ant-form-item {
    margin-bottom: 18px;
  }

  .ant-form-item-label {
      label {
        color: #000;
        font-size: 12px;
        font-weight: 600;
      }
    }
    .html-content {
      border-radius:10px;
      width: 100%;
      background: white;
      word-break: break-word;
      img {
        max-width: 200px;
        max-height: 200px;
        object-fit:contain;
      }
    }
    .label {
      display: flex;
      align-items:center;
      svg {
        margin-right:5px;
      }
      path {
        fill: rgba(0, 0, 0, 0.45);
      }
    }
    .ant-input-number {
      width: 100%;
    }
    .ant-picker {
      width: 100%;
    }
    .cms-preview-item {
      width: 100%;
      max-height: 150px;
      overflow-y:hidden;

      .cms-preview-item-content {
        display:flex;
        margin: 10px;
        border: 1px solid #d1d1d1;
        .info {
          flex:1;
        }
        .preview-comp {
          max-width: 150px;
        }
        * {
          max-height: 130px;
        }
      }
    }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
`;

export default AppWrapper;
