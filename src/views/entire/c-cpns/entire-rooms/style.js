import styled from 'styled-components'

export const EntireRoomsWrapper = styled.div`
	position: relative;
	padding: 30px 20px;
	margin-top: 128px;

	.list {
		display: flex;
		flex-wrap: wrap;
	}
	.title {
		color: #222;
		font-size: 22px;
		font-weight: 700;
		margin: 0 0 10px 10px;
	}
	.loading {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		background-color: rgba(255, 255, 255, 0.5);
	}
`
