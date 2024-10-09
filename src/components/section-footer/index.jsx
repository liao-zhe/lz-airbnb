import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMore from '@/assets/svg/icon-more'

const SectionFooter = memo(props => {
  return (
    <SectionFooterWrapper>
      <div className="more">
        <span className="text">显示全部</span>
        <IconMore />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {}

export default SectionFooter
