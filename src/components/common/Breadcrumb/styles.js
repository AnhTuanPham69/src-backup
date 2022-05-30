import styled from 'styled-components';
import { Breadcrumb } from 'antd';

export const BreadcrumbWrapper = styled(Breadcrumb)`
  font-size: 24px;
  line-height: 29px;
  ${'' /* color: #000 !important; */}
  font-weight: 600;
  display: flex;

  .ant-breadcrumb-separator {
    color: #000 !important;
    font-size: 24px;
  }

  & > span:last-child .breadcrumb-item {
    color: ${({ theme }) => theme.palette.primary} !important;
    text-overflow: ellipsis;
    width: 500px;
    overflow: hidden;
    display: inline-block;
    line-height: 30px;
  }

  & > span:first-child .breadcrumb-item {
    color: #000 !important;
  }


`;
