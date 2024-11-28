import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const HeaderTabs = memo(props => {
	const { titles = [], clickHandle } = props
	const [setIndex, setSetIndex] = useState(0)

	const clickItemHandle = index => {
		setSetIndex(index)
		clickHandle && clickHandle(index)
	}
	return (
		<TabsWrapper>
			{titles.map((item, index) => {
				return (
					<div className="tab" key={index} onClick={() => clickItemHandle(index)}>
						<div className="title">{item}</div>
						<span className={classNames('bottom', { active: index === setIndex })}></span>
					</div>
				)
			})}
		</TabsWrapper>
	)
})

HeaderTabs.propTypes = {
	titles: PropTypes.array,
	clickHandle: PropTypes.func
}

export default HeaderTabs
