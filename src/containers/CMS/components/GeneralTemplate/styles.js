import styled from 'styled-components';

export default styled.div`
  padding: 0px 10px 10px 10px;
  .item {
    min-height: 100px;
    margin: 0px 10px 30px 10px;
    display: flex;
    align-center: center;
    background: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    &:hover {
      background: #00000050;
      color: white;
    }
  }
  .selected {
    color: white;
    background: ${({ theme }) => theme.palette.primary};
    position: absolute;
    bottom: 5px;
    right: 5px;
    padding: 3px 10px;
    border-radius: 2px;
  }
  .ant-carousel {
    .slick-list {
      .slick-slide {
        pointer-events: auto;
      }
    }
    .slick-dots {
      li {
        button {
          background: ${({ theme }) => theme.palette.primary};
        }
        &.slick-active {
          button {
            background: ${({ theme }) => theme.palette.primary};
          }
        }
      }
    }
  }
`;
