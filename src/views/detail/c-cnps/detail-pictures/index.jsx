import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { DetailPicturesWrapper } from './style'
import PhotoWall from '@/base-ui/photo-wall'

const DetailPictures = memo(props => {
	const { pictureUrls } = props
	const [showPhotoWall, setShowPhotoWall] = useState(false)
	const [selectIndex, setSelectIndex] = useState(0)
	const showPreviewHandle = (index = 0) => {
		setShowPhotoWall(true)
		setSelectIndex(index)
	}

	const closePhotoWallHandle = useCallback(() => {
		setShowPhotoWall(false)
	}, [])
	return (
		<DetailPicturesWrapper>
			<div className="top">
				<div className="left">
					<div className="item" onClick={e => showPreviewHandle()}>
						<img src={pictureUrls?.[0]} alt="" />
						<div className="cover"></div>
					</div>
				</div>
				<div className="right">
					{pictureUrls?.slice(1, 5).map((item, index) => {
						return (
							<div className="item" key={item} onClick={e => showPreviewHandle(index + 1)}>
								<img src={item} alt="" />
								<div className="cover"></div>
							</div>
						)
					})}
				</div>
			</div>
			{pictureUrls && (
				<div className="show-btn" onClick={e => showPreviewHandle()}>
					查看照片
				</div>
			)}
			{showPhotoWall && (
				<PhotoWall pictureUrls={pictureUrls} imgIndex={selectIndex} closeClick={closePhotoWallHandle} />
			)}
		</DetailPicturesWrapper>
	)
})

DetailPictures.propTypes = {
	pictureUrls: PropTypes.array
}

export default DetailPictures
