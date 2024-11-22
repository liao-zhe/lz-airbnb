import styled from 'styled-components'

export const EntirePaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	.info {
		text-align: center;
		margin-top: 20px;
	}

	.MuiPaginationItem-root.Mui-selected {
		color: #fff;
		background-color: #222222;
		&:hover {
			text-decoration: underline;
			background-color: #222222;
		}
	}
	.MuiPaginationItem-root:hover {
		text-decoration: underline;
		background-color: rgba(0, 0, 0, 0.04);
	}
`
