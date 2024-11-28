import styled from 'styled-components'

export const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	color: ${props => (props.theme.isTransparent ? '#fff' : props.theme.text.primaryColor)};
	font-weight: 600;
	.btns {
		display: flex;
		/* box-sizing: content-box; */
		.btn {
			height: 18px;
			line-height: 18px;
			padding: 12px 15px;
			border-radius: 22px;
			cursor: pointer;

			&:hover {
				background-color: ${props => (props.theme.isTransparent ? '#d3d3d3' : '#f5f5f5')};
			}
		}
		& > .btn:last-child {
			margin-top: 2px;
		}
	}

	.profile {
		position: relative;
		display: flex;
		justify-content: space-evenly; /* 项之间间距相等，并且首位项距离容器边缘的距离也相等 均匀分布在整个容器中 space-around的就是并且首尾项距离容器边缘的距离为项目之间间距的一半*/
		align-items: center;
		width: 77px;
		height: 42px;
		margin-right: 24px;
		border: 1px solid #ccc;
		border-radius: 25px;
		color: ${props => props.theme.text.primaryColor};
		background-color: ${props => (props.theme.isTransparent ? '#fff' : '')};

		cursor: pointer;

		${props => props.theme.mixin.boxShadow}
	}
	.panel {
		position: absolute;
		top: 75px;
		right: 26px;
		width: 240px;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
		color: #666;

		& > .top,
		.bottom {
			padding: 10px 0;
			.item {
				height: 40px;
				line-height: 40px;
				padding: 0 16px;

				&:hover {
					background-color: #f5f5f5;
				}
			}
		}
		& > .top {
			border-bottom: 1px solid #ddd;
		}
	}
`
