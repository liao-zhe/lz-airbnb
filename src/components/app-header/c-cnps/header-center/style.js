import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    box-sizing: border-box;
    width: 300px;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${props => props.theme.text.secondaryColor};
      font-weight: 600;
    }
    
    .search-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 31px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }
`
