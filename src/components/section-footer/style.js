import styled from 'styled-components'

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .more {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`
