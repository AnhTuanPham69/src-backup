import styled from 'styled-components';
import { Row } from 'antd';

export default styled(Row)`
  .social-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .avatar-business {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-avatar > img {
    object-fit: contain;
  }
`;
