import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useSelector } from 'react-redux'

const EntireRooms = memo(props => {
	const { isLoading, roomList } = useSelector(state => ({
		roomList: state.entire?.roomList || []
	}))

	return <EntireRoomsWrapper>{roomList}</EntireRoomsWrapper>
})

EntireRooms.propTypes = {}

export default EntireRooms
