import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  height: fit-content;
  transition: padding-left 0.3s ease 0.1s, padding-right 0.3s ease 0.1s,
    position 0 ease 0.3s;
  .extraAction {
    margin-bottom: 0.5em;
    margin-left: 15px;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.text.primary};
    flex: 1;
    display: flex;
    align-items: flex-start;
    white-space: nowrap;
    flex-direction: column;

    ${
      '' /* @media only screen and (max-width: 767px) {
      margin: 0 10px;
    } */
    }

    &:before {
      ${
        '' /* content: '';
      width: 5px;
      height: 40px;
      background-color: ${({ theme }) => theme.palette.color[1]};
      display: flex;
      margin: 0 15px 0 0; */
      }
    }

    &:after {
      ${
        '' /* content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.palette.color[1]};
      display: flex;
      margin-left: 15px; */
      }
    }
  }

  .desc-header {
    font-size: 14px;
    line-height: 23px;
    color: #808da4;
    white-space: break-spaces;
    margin-bottom: 5px;
  }
`;
