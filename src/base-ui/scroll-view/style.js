import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;
    .content-scroll {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  & > .left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & > .right {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`
