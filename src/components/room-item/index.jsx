import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import Indicator from '@/base-ui/indicator'
import { Carousel } from 'antd'
import classNames from 'classnames'
import IconLeft from '@/assets/svg/icon-left'
import IconRight from '@/assets/svg/icon-right'

const RoomItem = memo(props => {
	const { itemData, $itemwidth = '25%', itemClick } = props
	const [selectIndex, setSelectIndex] = useState(0)
	const swiperRef = useRef()

	const controlClickHandle = (e, type) => {
		e.stopPropagation()
		type === 'prev' ? swiperRef.current.prev() : swiperRef.current.next()
		let newIndex = type === 'prev' ? selectIndex - 1 : selectIndex + 1
		if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
		if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
		setSelectIndex(newIndex)
	}
	const itemClickHandle = () => {
		itemClick && itemClick()
	}

	return (
		<ItemWrapper
			$desccolor={itemData?.verify_info?.text_color || '#39576a'}
			$itemwidth={$itemwidth}
			onClick={() => itemClickHandle()}>
			<div className="inner">
				{!itemData.picture_urls ? (
					<div className="cover">
						<img src={itemData.picture_url} alt="" />
					</div>
				) : (
					<div className="slider">
						<div className="control">
							<div className="btn left" onClick={e => controlClickHandle(e, 'prev')}>
								<IconLeft width={28} height={28} />
							</div>
							<div className="btn right" onClick={e => controlClickHandle(e, 'next')}>
								<IconRight width={28} height={28} />
							</div>
						</div>
						<div className="indicator">
							<Indicator selectIndex={selectIndex}>
								{itemData.picture_urls.map((item, index) => {
									return (
										<div className="item" key={item}>
											<span className={classNames(['dot', selectIndex === index ? 'active' : ''])}></span>
										</div>
									)
								})}
							</Indicator>
						</div>
						<Carousel dots={false} ref={swiperRef}>
							{itemData.picture_urls.map((item, index) => {
								return (
									<div className="cover" key={index}>
										<img src={item} alt="" />
									</div>
								)
							})}
						</Carousel>
					</div>
				)}
				<div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">{itemData.price_format}/晚</div>
				<div className="rate">
					{
						<Rating
							size="small"
							precision={0.1}
							value={itemData.star_rating ?? 5}
							readOnly
							sx={{
								fontSize: '12px',
								marginRight: '-1px',
								color: `${itemData.star_rating_color}`
							}}
						/>
					}
					<span className="count">{itemData.reviews_count}</span>
					{itemData.bottom_info && <span className="extra">·{itemData.bottom_info?.content}</span>}
				</div>
			</div>
		</ItemWrapper>
	)
})

RoomItem.propTypes = {
	itemData: PropTypes.object
}

export default RoomItem
