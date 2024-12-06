import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	.content {
		position: relative;
		z-index: 999;
		transition: all 250ms ease;
		background-color: ${props => (props.theme.isTransparent ? 'trasnparent' : '#fff')};
		border-bottom: 1px solid #eee;
		border-color: ${props => (props.theme.isTransparent ? 'transparent' : '#eee')};
		> .top {
			display: flex;
			align-items: center;
			height: 80px;
			padding: 0 24px;
		}
	}
	.cover {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.3);
	}

	&.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: ${props => (props.theme.isTransparent ? 'transparent' : '#fff')};
		z-index: 999;
	}
`

export const SearchWrapper = styled.div`
	height: ${props => (props.isSearch ? '100px' : '0px')};
	transition: height 250ms ease;
`
