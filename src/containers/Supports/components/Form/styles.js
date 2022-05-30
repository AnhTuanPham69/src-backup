import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea } = Input;

export const InputWrapper = styled(Input)`
  pointer-events: none !important;
`;

export const TextAreaWrapper = styled(TextArea)`
  pointer-events: none !important;
`;
