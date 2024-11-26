import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoActon } from '@/store/modules/detail'

const EntireRooms = memo(props => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { roomList, isLoading, totalCount } = useSelector(
		state => ({
			roomList: state.entire.roomList,
			isLoading: state.entire.isLoading,
			totalCount: state.entire.totalCount
		}),
		shallowEqual
	)

	const itemClickHandle = useCallback(
		item => {
			navigate('/detail')
			dispatch(changeDetailInfoActon(item))
		},
		[navigate, dispatch]
	)

	return (
		<EntireRoomsWrapper>
			<div className="title">共{totalCount}多处住所</div>
			<div className="list">
				{roomList.map(item => {
					return <RoomItem key={item._id} itemData={item} $itemwidth="20%" itemClick={e => itemClickHandle(item)} />
				})}
			</div>
			{isLoading && <div className="loading">加载中...</div>}
		</EntireRoomsWrapper>
	)
})

export default EntireRooms
