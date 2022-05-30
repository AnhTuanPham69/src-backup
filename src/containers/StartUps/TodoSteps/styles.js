import styled from 'styled-components';

export const TodoStepsWrapper = styled.div`
  background: #fff;
  border-radius: 8px;

  .content {
    .title-section,
    .todo-section {
      h2,
      h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        color: #030610;
      }
    }

    p {
      margin-bottom: 0;
    }
    .todo-section {
      margin: 0 !important;
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
