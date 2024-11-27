import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cnps/detail-pictures'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
	const { detailInfo } = useSelector(
		state => ({
			detailInfo: state.detail.detailInfo
		}),
		shallowEqual
	)

	useEffect(() => {})
	return (
		<DetailWrapper>
			<DetailPictures pictureUrls={detailInfo.picture_urls} />
		</DetailWrapper>
	)
})

export default Detail
