import styled from 'styled-components';

export const SummaryRowWrapper = styled.div`
  .ant-row {
    align-items: stretch;

    .ant-col > div {
      height: 100%;
    }

    .ant-col {
      pointer-events: none;
    }
  }
`;
