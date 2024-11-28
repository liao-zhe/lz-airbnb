import styled from 'styled-components'

export const TabsWrapper = styled.div`
	display: flex;
	color: ${props => (props.theme.isTransparent ? '#fff' : props.theme.color.primaryColor)};
	.tab {
		position: relative;
		width: 64px;
		height: 20px;
		margin: 10px 16px;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.bottom {
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}
	.active {
		position: absolute;
		top: 28px;
		left: 0;
		width: 64px;
		height: 2px;
		background-color: ${props => (props.theme.isTransparent ? '#fff' : '#333333')};
		transform: scaleX(1);
	}
`
