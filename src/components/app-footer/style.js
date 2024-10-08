import styled from 'styled-components'

export const FooterWrapper = styled.div`
  .footer {
    box-sizing: border-box;
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;

    .service {
      display: flex;
      .item {
        flex: 1;
        .name {
          margin-bottom: 16px;
          font-weight: 700;
        }
        .list {
          .subItem {
            margin-top: 6px;
            color: #767676;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .statement {
      margin-top: 30px;
      padding: 20px;
      color: #767676;
      text-align: center;
      border-top: 1px solid #ebebeb;
    }
  }
`
