import styled from 'styled-components';

const FilesListStyles = styled.div`
  .title-label {
    font-weight: 600;
    margin-bottom: 15px;
  }

  ${'' /* @media only screen and (min-width: 576px) {
    .col-file-item:nth-child(2n) {
    padding-left: 5px;
    }
    .col-file-item:nth-child(2n+1) {
      padding-right: 5px;
    }
  } */}

  .list-file-item > .ant-col {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 576px) {
    .col-file-item {
      padding: 0;
    } 
  }

  .file-item {
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    ${'' /* display: flex;
    align-items: center; */}
    ${'' /* background: ${({ theme }) => theme.background.contentItem}; */}
    background: ${({ theme }) => theme.background.fileItem};
    color: ${({ theme }) => theme.text.fileItem};
    padding: 5px;
    max-width: 100%;
    justify-content: space-between;
    .a-file-item {
      padding-right: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.text.fileItem};
      &:hover, &:active {
        color: ${({ theme }) => theme.palette.primary};
      }
    }
      .icon-file-name {
        display: flex;
        align-items: center;
      }
      .download-file {
        ${'' /* height: 30px;
        width: 30px; */}
        padding-left: 5px;
        border: none;
          ${
            '' /* background: ${({ theme }) => theme.background.contentItem}; */
          }
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover i, &:active i{
            color: ${({ theme }) => theme.palette.primary};
          }
          i {
            ${'' /* padding: 15px; */}
            color: ${({ theme }) => theme.text.fileItem};
            font-size: 18px;
          }
      }
    i {
      ${'' /* color: ${({ theme }) => theme.palette.primary}; */}
    }
    .name-file {
      ${'' /* padding: 0px 10px; */}
      ${'' /* max-width: 200px; */}
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    .wrapper-file-item {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        width: 30px;
        height: 30px;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .image-file {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
`;

export default FilesListStyles;
