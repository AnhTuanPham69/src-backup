import styled from 'styled-components';
import { Radio } from 'antd';

const { Button } = Radio;

export default styled(Button)`
  & > span > div {
    height: 135px !important;
    position: relative;
  }
`;