import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
import IconLeft from '@/assets/svg/icon-left'
import IconRight from '@/assets/svg/icon-right'

const ScrollView = memo(props => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRgith, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()
  const scrollContentRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滚动的长度
    const clientWidth = scrollContentRef.current.clientWidth // 容器的宽度
    // 计算出可滚动的距离
    const totalDiff = scrollWidth - clientWidth
    totalDistanceRef.current = totalDiff

    // 如果可滚动长度的大于0，就显示右按钮
    setShowRight(totalDiff > 0)
  }, [props.children]) //只有当props.children发生变化的时候才触发，不然每次左右点击的时候都会触发useEffect

  const controlClickHandle = isRight => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const itemEl = scrollContentRef.current.children[newIndex]
    const itemElOffsetLeft = itemEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${itemElOffsetLeft}px)`
    setPosIndex(newIndex)
    // 剩余的可滚动距离还没有完全被滚动完就隐藏右击按钮
    setShowRight(totalDistanceRef.current > itemElOffsetLeft)
    setShowLeft(newIndex > 0)
  }

  return (
    <ScrollWrapper>
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconLeft />
        </div>
      )}
      {showRgith && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconRight />
        </div>
      )}

      <div className="scroll">
        <div className="content-scroll" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
