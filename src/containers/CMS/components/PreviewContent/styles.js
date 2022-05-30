import styled from 'styled-components';

export default styled.div`
  flex: 1;
  .main-layout {
    position: relative;
    & > div:first-child {
      ${'' /* position: absolute; */}
    }
  }
  .ant-layout-content {
    margin: 10px;
    margin-left: 0px;
    padding: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    .main-content {
      padding-top: 90px;
    }
  }

  .overlay {
    position: absolute;
    display: none;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .mobile {
    width: 375px;
    max-width: 375px;
    margin: auto;
    .main-content,
    .container {
      width: 375px;
      max-width: 375px;
    }
  }
`;
