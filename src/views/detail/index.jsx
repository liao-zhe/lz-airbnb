import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cnps/detail-pictures'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
	const dispatch = useDispatch()
	const { detailInfo } = useSelector(
		state => ({
			detailInfo: state.detail.detailInfo
		}),
		shallowEqual
	)

	useEffect(() => {
		dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
	}, [dispatch])

	return (
		<DetailWrapper>
			<DetailPictures pictureUrls={detailInfo.picture_urls} />
		</DetailWrapper>
	)
})

export default Detail
