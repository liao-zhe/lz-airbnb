import React, { memo, useEffect, useRef, useState } from 'react'
import { HeaderWrapper, SearchWrapper } from './styles'
import HeaderLeft from './c-cnps/header-left'
import HeaderCenter from './c-cnps/header-center'
import HeaderRight from './c-cnps/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { useScrollPosition } from '@/hooks'

const AppHeader = memo(() => {
	const [isSearch, setIsSearch] = useState(false)
	const [isTransparent, setIsTransparent] = useState(false)

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

	// 记录上一次的滚动位置
	const preScrollY = useRef()

	// 初始化preScrollY为0
	useEffect(() => {
		preScrollY.current = 0
	}, [])

	// 如果当前不是搜索状态，则将当前滚动位置赋值给preScrollY
	if (!isSearch) preScrollY.current = scrollY
	if (Math.abs(scrollY - preScrollY.current) > 10) setIsSearch(false)

	const searchClick = () => {
		setIsSearch(true)
	}

	return (
		<ThemeProvider theme={{ isTransparent }}>
			<HeaderWrapper className={classNames({ fixed: isFixed })}>
				<div className="content">
					<div className="top">
						<HeaderLeft />
						<HeaderCenter isSearch={isSearch} searchClick={searchClick} />
						<HeaderRight />
					</div>
					<SearchWrapper $isSearch={isSearch} />
				</div>
				{isSearch && !isTransparent && <div className="cover" onClick={e => setIsSearch(false)}></div>}
			</HeaderWrapper>
		</ThemeProvider>
	)
})

export default AppHeader
