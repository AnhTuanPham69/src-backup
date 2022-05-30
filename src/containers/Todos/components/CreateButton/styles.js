import styled from 'styled-components';
import { Button } from 'antd';

export const CreateButtonWrapper = styled(Button)`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;

  .svgIcon {
    svg > path {
      fill: #ffb21d;
    }
  }
`