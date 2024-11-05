import styled from 'styled-components'

export const SectionTabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
  }
  &:last-child {
    margin-right: 0;
  }
  .active {
    color: #fff;
    background-color: ${props => props.theme.color.secondaryColor};
  }
`
