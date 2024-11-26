import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
	const { selectIndex } = props
	const dotsRef = useRef()
	useEffect(() => {
		// 选中的dot
		const selectEl = dotsRef.current.children[selectIndex]
		const selectOffset = selectEl.offsetLeft
		const selectWidth = selectEl.clientWidth
		// 容器
		const containerWidth = dotsRef.current.clientWidth
		const containerScrollWidth = dotsRef.current.scrollWidth

		// 滚动距离等于 = 要移动元素的offsetLeft+自身的一半-视口距离的一半
		let distance = selectOffset + selectWidth * 0.5 - containerWidth * 0.5

		// 边界处理
		// 如果距离小于0，则左边的translate距离为0
		// 如果距离大于最大可滚动距离，则右边的translate距离为最大可滚动距离
		if (distance < 0) distance = 0
		if (distance > containerScrollWidth - containerWidth) distance = containerScrollWidth - containerWidth
		dotsRef.current.style.transform = `translate(${-distance}px)`
	}, [selectIndex])

	return (
		<IndicatorWrapper>
			<div className="dots" ref={dotsRef}>
				{props.children}
			</div>
		</IndicatorWrapper>
	)
})

Indicator.propTypes = {
	selectIndex: PropTypes.number
}

export default Indicator
