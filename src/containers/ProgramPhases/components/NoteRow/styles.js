import styled from 'styled-components';

export const NoteRowWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.background.content};
  padding: 20px;
  box-shadow: 0px 6px 18px rgba(144, 164, 183, 0.22);

  .ant-btn {
    height: auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #06195b;
    padding: 10px 35px;
  }

  .program-info {
    display: flex;
    align-items: flex-start;

    h3 {
      font-size: 20px;
      font-weight: 600;
      line-height: 27px;
      color: #06195b;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      padding-right: 20px;
    }
  }

  .img {
    width: 100px;
    height: 100px;
    background: ${({ theme }) => theme.background.content};
    border-radius: 8px;
    margin-right: 20px;
    ${'' /* margin-top: 5px; */}
    box-shadow: 0px 6px 18px rgba(144, 164, 183, 0.22);

  }
`;
