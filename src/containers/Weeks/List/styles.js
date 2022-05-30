import styled from 'styled-components';
import { Row } from 'antd';

export default styled(Row)`
  ${'' /* height: 100%; */}
  min-height: calc(100% - 90px);
  width: 100%;
  margin: 0 !important;
  .empty-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .first-column {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .second-column {
    padding-left: 16px !important;
    padding-right: 0px !important;

    .week-column-detail {
      height: 100%;

      .ant-tabs-content-holder {
        height: 100%;

        .ant-tabs-content {
          height: 100%;

          .ant-tabs-tabpane {
            & > div {
              height: 100%;
              .ant-row.viewContent {
                overflow: auto;

                height: 100%;
                div:last-child {
                  width: 100%;
                  & > div:first-child {
                    flex-grow: 2;
                  }
                  .ant-pagination {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .week-column {
    width: 100%;

    .week-column-detail {
    }

    .viewContent {
      height: 100%;

      .table-content {
        padding: 0;
        border: none;
        height: 100%;

        .vActions {
          margin: 0;
        }
      }
    }
  }
`;

export const BreadcrumbWrapper = styled.div`
  .ant-breadcrumb {
    .ant-breadcrumb-separator {
      font-size: 24px !important;
    }
  }
`;
