import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { shallowEqual, useSelector } from 'react-redux'

const EntireRooms = memo(props => {
	const { roomList, isLoading, totalCount } = useSelector(
		state => ({
			roomList: state.entire.roomList,
			isLoading: state.entire.isLoading,
			totalCount: state.entire.totalCount
		}),
		shallowEqual
	)

	return (
		<EntireRoomsWrapper>
			<div className="title">共{totalCount}多处住所</div>
			<div className="list">
				{roomList.map(item => {
					return <RoomItem key={item._id} itemData={item} $itemwidth="20%" />
				})}
			</div>
			{isLoading && <div className="loading">加载中...</div>}
		</EntireRoomsWrapper>
	)
})

EntireRooms.propTypes = {}

export default EntireRooms
