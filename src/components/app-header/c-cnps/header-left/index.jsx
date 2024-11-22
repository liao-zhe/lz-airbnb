import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
	const navigate = useNavigate()
	const logoClickHandler = () => {
		navigate('/')
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
