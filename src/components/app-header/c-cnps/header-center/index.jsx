import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="search-icon">
          <IconSearch />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
