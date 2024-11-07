import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapperV3 } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const SectionV3 = memo(props => {
  const { infoData } = props
  return (
    <SectionWrapperV3>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem key={item.id} itemData={item} itemwidth="20%" />
          })}
        </ScrollView>
      </div>
      <SectionFooter name={'plus'} />
    </SectionWrapperV3>
  )
})

SectionV3.propTypes = {
  infoData: PropTypes.object
}

export default SectionV3
