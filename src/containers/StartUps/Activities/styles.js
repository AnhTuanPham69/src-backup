import styled from 'styled-components';

export const ActivitiesWrapper = styled.div`
  border-radius: 8px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
  }
  .ant-spin {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h3 {
    padding: 10px 20px;
  }
  .viewContent {
    .sc-gsDJrp {
      display: none;
    }
  }

  .table-content {
    border: none;
    padding: 0 0 20px;

    .vActions {
      display: none;
    }

    .ant-table-container table > thead {
      .ant-table-cell {
        padding: 5px 20px;
      }

      .ant-table-column-sorters {
        padding: 8px 0px;
      }
    }
  }
`;
