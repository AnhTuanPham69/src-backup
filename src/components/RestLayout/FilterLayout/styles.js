import styled from 'styled-components';
import { Form } from 'antd';

export const FilterFormWrapper = styled(Form)`
  margin: auto;
  margin-bottom: 20px;
  background: transparent;
  padding: 0;
  .filterContainer {
    display: flex;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .filterContent {
    flex: 1;
    justify-content: flex-end;
    margin-right: 10px;
    & > div {
      display: flex;
      justify-content: space-between;
      .ant-form-item {
        margin-bottom: 0;

        .ant-form-item-label {
          display: none;
        }
        .ant-form-item-control {
          line-height: normal;

          .ant-input-affix-wrapper {
            .ant-input-suffix .svgIcon svg {
              width: 14px;
              height: 14px;
            }
          }

          ${
            '' /* .ant-input, .ant-picker-range, .ant-select-selector, .ant-input-affix-wrapper, .ant-input-number {
            background: ${({ theme }) => theme.background.lightBlue} !important;
            border-color: ${({ theme }) => theme.background.lightBlue} !important;
          } */
          }
        }
      }
    }
    @media only screen and (max-width: 576px) {
      margin-right: 0px;
    }
  }
  .filterActions {
    width: 250px;
    @media only screen and (max-width: 768px) {
      display: block;
      width: 100%;
      .ant-row > .ant-col {
        margin-bottom: 15px;
      }
    }
  }
  .border {
  }
  .filterButton {
    width: 100%;
    font-size: 14px;
  }
  ${
    '' /* .clearButton {
    background: #fff;
    border: 1px solid #ffb21d;
    color: #ffb21d;
  } */
  }
  .ant-form-item {
    margin-bottom: 0px;
    margin-right: -1px;
  }
  .ant-form-item-label label {
    color: ${({ theme }) => theme.text.itemLabel};
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-selector,
  .ant-input,
  .ant-input-number,
  .ant-input-affix-wrapper,
  .ant-picker {
    border: 1px solid transparent !important;
    box-shadow: 0px 2px 12px rgb(0 0 0 / 6%);
  }

  textarea,
  .ant-input,
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-selection,
  .ant-input-number,
  .ant-select-dropdown-menu-item,
  .ant-select-dropdown-menu,
  .ant-select-dropdown,
  .ant-select-clear-icon,
  .ant-select-dropdown-menu-vertical {
    &:focus,
    &:active {
      border: 1px solid ${({ theme }) => theme.palette.primary} !important;
    }
  }

  .ant-select-focused.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector,
  .ant-input-affix-wrapper-focused,
  .ant-input-number-focused,
  .ant-picker-focused {
    border: 1px solid ${({ theme }) => theme.palette.primary}!important;
  }

  .ant-input-affix-wrapper .ant-input {
    border-color: transparent !important;
    box-shadow: unset;
  }

  .ant-picker {
    width: 100%;
  }
`;
