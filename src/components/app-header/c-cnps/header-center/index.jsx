import React, { memo, useState, useCallback, useEffect } from 'react'
import { CenterWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import IconSearch from '@/assets/svg/icon-search'
import HeaderTabs from './c-cnps/header-tabs'
import searchData from '@/assets/data/search_titles.json'
import HeaderSections from './c-cnps/header-sections'

const HeaderCenter = memo(props => {
	const { isSearch, searchClick } = props
	const [currentIndex, setCurrentIndex] = useState(0)
	const titles = searchData.map(item => item.title)
	const searchInfos = searchData.map(item => item.searchInfos)

	useEffect(() => {
		isSearch && setCurrentIndex(0)
	}, [isSearch])

	const clickHandle = useCallback(index => {
		setCurrentIndex(index)
	}, [])

	return (
		<CenterWrapper>
			<CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
				<div className="search-bar" onClick={e => searchClick()}>
					<div className="text">搜索房源和体验</div>
					<div className="search-icon">
						<IconSearch />
					</div>
				</div>
			</CSSTransition>

			<CSSTransition in={isSearch} timeout={250} classNames="detail" unmountOnExit={true}>
				<div className="search-detail">
					<HeaderTabs titles={titles} clickHandle={clickHandle} />
					<div className="infos">
						<HeaderSections searchInfos={searchInfos[currentIndex]} />
					</div>
				</div>
			</CSSTransition>
		</CenterWrapper>
	)
})

export default HeaderCenter
