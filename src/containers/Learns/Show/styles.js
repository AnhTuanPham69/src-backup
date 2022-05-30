import styled from 'styled-components';

export const PhaseWrapper = styled.div`
  .breadcrumb-section {
    padding-bottom: 20px;
    .ant-breadcrumb {
      line-height: 29px;
      font-size: 24px;
      font-weight: 600;
      a {
        color: #000 !important;
      }
    }

    .ant-breadcrumb-separator {
      color: #000 !important;
    }

    span:last-child span:first-child, span:last-child .ant-breadcrumb-link a{
      color: rgb(5 36 123 / 85%) !important;
    }
  }

  .content-section-mobile {
    display: none;
  }

  .content-section-web {
    display: flex;

    .titles {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 20px;

    }

    ${
      '' /* .sider {
      width: 20%;
      margin-right: 15px;
      & > * {
        margin-bottom: 10px;
      }

      .phase-header {
        & > * {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: none;
        }
        margin-bottom: 0;
      }
      .learn-phase {
        .content-section {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    } */
    }

    .lesson {
      width: 100%;
      ${'' /* margin-top: 32px; */}
      
      & > div {
        background: #fff;
        
      }
    }
  }

  @media (max-width: 1470px) {
    .breadcrumb-section {
      .ant-breadcrumb {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 850px) {
    margin-left: 20px;
    margin-right: 20px;
    .content-section-web {
      display: none;
    }

    .content-section-mobile {
      display: block;
    }

    .breadcrumb-section {
      padding-bottom: 0px;
      .ant-breadcrumb {
        line-height: 25px;
        font-size: 14px;
      }
    }

    .content-section-web .ant-collapse .ant-collapse-header {
      border-radius: 0;
    }
    .header-section {
      display: none;
    }

    .phase-header-mobile {
      margin-top: 10px;
      margin-bottom: 10px;

      & > * {
        padding: 10px;

        .title-header {
          p {
            margin: 0;
          }
        }
      }
    }
    .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
    .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active {
      background: #ffb21d20 !important;
    }
    .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
    .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
      margin: 0;
      padding: 8px 16px;
      background: #fff;
    }

    .tab-content .ant-tabs .ant-tabs-nav {
      margin: 0;
    }

    .tab-content {
      margin-bottom: 10px;
      .learn-phase-mobile {
        .content-section {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-top: none;
        }
      }

      .do-phase-mobile,
      .get-phase-mobile {
        .ant-collapse {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-top: none;
        }
      }
    }

    .content-section-mobile{
    .content-mobile {
      margin-bottom: 10px;
       
      & > * {
        padding: 10px 16px;
        margin-top: 10px;
      }

      .title-row {
        .ant-btn {
          font-size: 16px;
        }
        
        .title {
          font-size: 18px;
        }
      }
      .video-section {
        width: 100%;

        .iframe {
          height: 200px;
          width: 100%;
        }

        .secondary-btn.ant-btn-primary {
          width: 100%;
        }

        .footer {
          padding: 10px 16px;

          .ant-rate {
            display: flex;
            .ant-rate-star:not(:last-child) {
              margin-right: 5px;
            }
          }

          .avt
          .ant-avatar {
            width: 40px;
            height: 40px;

            ${
              '' /* img {
              ${'' /* width: 40px;
            height: 40px; */
            }
            } */}
          }
        }
      }

      .comment-section .comment-line {
        width: 100% !important;
        padding-top: 15px !important;

        h3 {
          margin: 0;
        }

        p {
          line-height: 20px;
        }
      }

      .leaveComment {
        width: 100% !important;
        padding-bottom: 10px !important;
        & > * {
          margin-left: 5px !important;
        }

        .ant-avatar {
          min-width: 40px;
        }
      }
    }}
  }
`;
