import styled from 'styled-components'

export const EntireFilterWrapper = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	z-index: 99;

	display: flex;
	height: 48px;
	padding-left: 20px;
	align-items: center;
	border-bottom: 1px solid #f2f2f2;
	background-color: #fff;

	.filter-content {
		display: flex;

		.item {
			margin: 0 4px 0 8px;
			padding: 6px 12px;
			border: 1px solid #dce0e0;
			border-radius: 4px;
			color: #484848;
			cursor: pointer;

			&.active {
				color: #fff;
				border: 1px solid #008489;
				background-color: #008489;
			}
		}
	}
`
