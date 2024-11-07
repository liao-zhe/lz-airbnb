import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
// import { Rating } from '@mui/material'

const RoomItem = memo(props => {
  const { itemData, $itemwidth = '25%' } = props

  return (
    <ItemWrapper
      $desccolor={itemData?.verify_info?.text_color || '#39576a'}
      $itemwidth={$itemwidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="rate">
          {
            <Rating
              size="small"
              precision={0.1}
              value={itemData.star_rating ?? 5}
              readOnly
              sx={{
                fontSize: '12px',
                marginRight: '-1px',
                color: `${itemData.star_rating_color}`
              }}
            />
          }
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
