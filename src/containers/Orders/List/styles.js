import styled from 'styled-components';

export const ListWrapper = styled.div`
  .nameLink {
    color: #000;
  }

  .orderIdLink:hover, .nameLink:hover {
    color: ${({ theme }) => theme.palette.primary};
  }

  .orderIdLink {
    color: ${({ theme }) => theme.palette.lightPrimary};
  }
`;
