import PropTypes from 'prop-types'
import React, { memo, useEffect, useState, useRef } from 'react'
import { PhotoWallWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconLeft from '@/assets/svg/icon-left'
import IconRight from '@/assets/svg/icon-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Indicator from '../indicator'
import classNames from 'classnames'

const PhotoWall = memo(props => {
	const { pictureUrls = [], closeClick, imgIndex = 0 } = props

	const [selectIndex, setSelectIndex] = useState(imgIndex)
	const [isNext, setIsNext] = useState(false)
	const [showList, setShowList] = useState(true)
	const imgRef = useRef()

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const closeClickHanlde = () => {
		closeClick && closeClick()
	}

	const controlClickHanlde = isNext => {
		let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
		if (newIndex < 0) newIndex = pictureUrls.length - 1
		if (newIndex > pictureUrls.length - 1) newIndex = 0
		setSelectIndex(newIndex)
		setIsNext(isNext)
	}

	return (
		<PhotoWallWrapper $isNext={isNext}>
			<div className="top">
				<span className="btn-close" onClick={closeClickHanlde}>
					<IconClose />
				</span>
			</div>
			<div className="slider">
				<div className="control">
					<div className="btn left" onClick={e => controlClickHanlde(false)}>
						<IconLeft width="77" height="77" />
					</div>
					<div className="btn right" onClick={e => controlClickHanlde(true)}>
						<IconRight width="77" height="77" />
					</div>
				</div>
				<div className="container">
					<SwitchTransition mode="out-in">
						<CSSTransition key={pictureUrls[selectIndex]} nodeRef={imgRef} classNames="fade" timeout={300}>
							<img ref={imgRef} src={pictureUrls[selectIndex]} alt="" />
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			<div className="priview">
				<div className="info">
					<div className="desc">
						<div className="count">
							<span>
								{selectIndex + 1}/{pictureUrls.length}
							</span>
							<span> room Apartment图片{selectIndex + 1}</span>
						</div>
						<div className="toggle" onClick={e => setShowList(!showList)}>
							隐藏照片列表
							{showList ? <IconTriangleTop /> : <IconTriangleBottom />}
						</div>
					</div>
					<div className="list" style={{ height: showList ? '67px' : '0' }}>
						<Indicator selectIndex={selectIndex}>
							{pictureUrls.map((item, index) => {
								return (
									<div className={classNames('item', { active: index === selectIndex })} key={item}>
										<img src={item} alt="" onClick={e => setSelectIndex(index)} />
									</div>
								)
							})}
						</Indicator>
					</div>
				</div>
			</div>
		</PhotoWallWrapper>
	)
})

PhotoWall.propTypes = {
	pictureUrls: PropTypes.array,
	imgIndex: PropTypes.number,
	closeClick: PropTypes.func
}

export default PhotoWall
