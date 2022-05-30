import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 1px solid transparent;
  z-index: 999;
  &.selected {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
`;
