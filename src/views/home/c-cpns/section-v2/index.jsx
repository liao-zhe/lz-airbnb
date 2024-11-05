import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionWrapperV2 } from './style'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'

const SectionV2 = memo(props => {
  const { infoData } = props
  // 初始城市tab名称为
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = Object.keys(infoData.dest_list)

  // 拿到点击tab的索引和名称
  const tabClick = useCallback((index, name) => {
    setName(name)
  }, [])

  return (
    <SectionWrapperV2>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClick} />
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemwidth="33.333%"
      ></SectionRooms>
      <SectionFooter />
    </SectionWrapperV2>
  )
})

SectionV2.propTypes = {
  infoData: PropTypes.object
}

export default SectionV2
