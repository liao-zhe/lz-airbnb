import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter.json'
import classNames from 'classnames'

const EntireFilter = memo(props => {
	const [selectItem, setSelectItem] = useState([])

	const selectItemHandle = item => {
		const newItems = [...selectItem]
		if (newItems.includes(item)) {
			const index = newItems.findIndex(name => name === item)
			newItems.splice(index, 1)
		} else {
			newItems.push(item)
		}
		setSelectItem(newItems)
	}
	return (
		<EntireFilterWrapper>
			<div className="filter-content">
				{filterData.map((item, index) => {
					return (
						<div
							className={classNames('item', { active: selectItem.includes(item) })}
							key={index}
							onClick={e => selectItemHandle(item)}>
							{item}
						</div>
					)
				})}
			</div>
		</EntireFilterWrapper>
	)
})

export default EntireFilter
