import { Modal } from 'antd';
import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.background.content};
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1),
    0px 4px 20px -2px rgba(50, 50, 71, 0.08);
  border-radius: 8px;
  display: flex;
  padding: 26px 40px;

  .ant-avatar > img {
    object-fit: contain;
    background: ${({ theme }) => theme.background.gray};
  }

  .info-section {
    margin-left: 35px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .username {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: ${({ theme }) => theme.palette.dark};
  }

  .contact {
    display: flex;
    align-items: center;

    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.text.secondary};
      margin-left: 15px;
    }
  }

  .ant-btn {
    margin-left: 15px;
    color: ${({ theme }) => theme.palette.dark};
  }

  @media (max-width: 1300px) {
    .ant-avatar {
      width: 100px !important;
      height: 100px !important;
    }
    .username {
      font-size: 22px;
    }
    .contact {
      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    .ant-avatar {
      margin: 20px;
    }

    .btn-section {
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      width: 100%;
      .ant-btn {
        margin-left: 0px;
      }
    }

    .contact {
      svg {
        display: none;
      }
      p {
        margin-left: 0;
      }
    }
    .info-section {
      margin-left: 0px;
      align-items: center;
    }
  }
`;

export const ModalWrapper = styled(Modal)`
  .ant-modal-header {
    background: ${({ theme }) => theme.palette.primary};
  }

  .ant-modal-title {
    text-align: center;
    color: ${({ theme }) => theme.palette.dark};
  }
`;
