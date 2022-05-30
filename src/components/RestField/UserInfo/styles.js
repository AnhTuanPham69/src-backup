import styled from 'styled-components';

export const UserTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  .ant-avatar {
    margin-right: 10px;
  }
`;

export const UserInfoWrapper = styled.div`
  .ant-avatar {
    img {
      object-fit: contain;
      background: ${({ theme }) => theme.background.gray};
    }
  }
`;
