import styled from 'styled-components';

export const GroupWrapper = styled.span`
  display: flex;
  ${'' /* flex-direction: column; */}
  align-items: center;
  justify-content: flex-start;
  padding-right: 10px;
  ${'' /* width: fit-content; */}
  button {
    margin-right: 5px;
  }
  .iconSetting {
    font-size: 20px;
    cursor: pointer;
  }
`;
