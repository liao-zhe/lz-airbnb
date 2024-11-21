import styled from 'styled-components'

export const EntireFilterWrapper = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	bottom: 0;
	right: 0;

	display: flex;
	align-items: center;
	height: 48px;
	padding-left: 16px;
	border-bottom: 1px solid #f2f2f2;
	background-color: #fff;

	.filter-content {
		display: flex;
		.item {
			margin: 10px 3px;
			padding: 10px 16px;
			border: 1px solid #dce0e0;
			border-radius: 4px;
			cursor: pointer;
		}
		.active {
			color: #fff;
			background-color: #00848a;
		}
	}
`
