import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapperV1 } from './style'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'

const SectionV1 = memo(props => {
  const { infoData } = props
  return (
    <SectionWrapperV1>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData.subtitle}
      ></SectionHeader>
      <SectionRooms roomList={infoData.list}></SectionRooms>
      <SectionFooter />
    </SectionWrapperV1>
  )
})

SectionV1.prototype = {
  infoData: PropTypes.object
}

export default SectionV1
