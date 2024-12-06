import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'

const HeaderLeft = memo(props => {
	const { logoClick } = props
	const logoClickHandler = () => {
		logoClick && logoClick()
	}
	return (
		<LeftWrapper>
			<div className="logo" onClick={logoClickHandler}>
				<IconLogo />
			</div>
		</LeftWrapper>
	)
})

export default HeaderLeft
