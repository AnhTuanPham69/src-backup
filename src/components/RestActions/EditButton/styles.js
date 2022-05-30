import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonWrapper = styled(Button)`
  min-width: 30px;
  background: transparent;

  margin: 0px 5px;
  border: none;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  &:focus {
    transform: scale(1.1, 1.1);
  }
  .anticon {
    font-size: 20px;
  }
`;
