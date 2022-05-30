import styled from 'styled-components';
import { Collapse } from 'antd';

export default styled.div`
  .ql-editor {
    height: 150px;
    max-height: 400px;
  }
`;

export const CustomCollapse = styled(Collapse)`
  .section-title {
    display: inline-block;
    p {
      margin-bottom: 0;
    }
  }
`;
