import React, { memo, useState } from 'react'
import { HeaderWrapper } from './styles'
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

	return (
		<ThemeProvider theme={{ isTransparent }}>
			<HeaderWrapper className={classNames({ fixed: isFixed })}>
				<div className="content">
					<div className="top">
						<HeaderLeft />
						<HeaderCenter isSearch={isSearch} />
						<HeaderRight />
					</div>
					<div className="search"></div>
				</div>
				{isSearch && !isTransparent && <div className="cover"></div>}
			</HeaderWrapper>
		</ThemeProvider>
	)
})

export default AppHeader
