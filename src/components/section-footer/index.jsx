import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMore from '@/assets/svg/icon-more'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo(props => {
  const { name } = props

  let footerMessage = '显示全部'
  if (name) {
    footerMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()

  const moreClick = () => {
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper style={{ color: name ? '#00848A' : '#000' }}>
      <div className="more" onClick={moreClick}>
        <span className="text">{footerMessage}</span>
        <IconMore />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
