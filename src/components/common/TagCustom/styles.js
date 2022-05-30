import styled from 'styled-components';

export const TagCustomStyles = styled.div`
  span {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 5px 10px;
    white-space: nowrap;
    font-weight: 700;
  }
`;