import React, { memo, useEffect, useRef, useState } from 'react'
import { HeaderWrapper, SearchWrapper } from './styles'
import HeaderLeft from './c-cnps/header-left'
import HeaderCenter from './c-cnps/header-center'
import HeaderRight from './c-cnps/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { useScrollPosition } from '@/hooks'
import { useNavigate } from 'react-router-dom'

const AppHeader = memo(() => {
	const [isSearch, setIsSearch] = useState(false)
	const [isTransparent, setIsTransparent] = useState(false)
	const navigate = useNavigate()
	const { headerConfig } = useSelector(state => {
		return {
			headerConfig: state.main.headerConfig
		}
	}, shallowEqual)

	const { isFixed, isHome } = headerConfig
	const { scrollY } = useScrollPosition()

	if (isHome && scrollY === 0 && !isSearch) {
		setIsTransparent(true)
		setIsSearch(true)
	}
	if (isHome && isTransparent && scrollY > 0 && isSearch) {
		setIsTransparent(false)
		setIsSearch(false)
	}
	const searchClick = () => {
		setIsSearch(true)
	}
	const logoClick = () => {
		setIsSearch(false)
		navigate('/')
	}
	const preScorllY = useRef()
	// 初始化滚动位置为0
	useEffect(() => {
		preScorllY.current = 0
	}, [])

	// 如果isSearch为false，则将preScorllY设置为scrollY
	if (!isSearch) preScorllY.current = scrollY

	// 当滚动的距离大于10的时候isSearch为false
	if (Math.abs(scrollY - preScorllY.current) > 10) setIsSearch(false)

	return (
		<ThemeProvider theme={{ isTransparent }}>
			<HeaderWrapper className={classNames({ fixed: isFixed })}>
				<div className="content">
					<div className="top">
						<HeaderLeft logoClick={logoClick} />
						<HeaderCenter isSearch={isSearch} searchClick={searchClick} />
						<HeaderRight />
					</div>
					<SearchWrapper isSearch={isSearch} />
				</div>
				{isSearch && !isTransparent && <div className="cover" onClick={e => setIsSearch(false)}></div>}
			</HeaderWrapper>
		</ThemeProvider>
	)
})

export default AppHeader
