import styled from 'styled-components';
import { Form } from 'antd';

const FormItem = Form.Item;

export const FormItemWrapper = styled(FormItem)`
  .ant-form-item-label {
    label {
      color: ${({ theme }) => theme.text.formLabel};
      font-size: 12px;
      font-weight: 600;
      &:after {
        content: '';
      }
    }
  }
`;
