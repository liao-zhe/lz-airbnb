import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo(props => {
  const { roomList = [], itemwidth } = props
  return (
    <SectionRoomsWrapper>
      {roomList.slice(0, 8)?.map(item => {
        return <RoomItem itemData={item} key={item.id} itemwidth={itemwidth} />
      })}
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
