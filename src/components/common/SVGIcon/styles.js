import styled from 'styled-components';

export const SVGIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    width: ${({ size }) =>size}px;
    height: ${({ size }) =>size}px;
    object-fit: contain;
    align: center;
  },
`;
