import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	.content {
		position: relative;
		z-index: 9;
		background-color: ${props => (props.theme.isTransparent ? 'trasnparent' : '#fff')};
		> .top {
			display: flex;
			align-items: center;
			height: 80px;
		}
		.search {
			height: ${props => (props.theme.isTransparent ? '100px' : '0px')};
			border-bottom: 1px solid #eee;
			border-color: ${props => (props.theme.isTransparent ? 'transparent' : '#eee')};
		}
	}
	.cover {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	&.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: ${props => (props.theme.isTransparent ? 'transparent' : '#fff')};
		z-index: 9;
	}
`
