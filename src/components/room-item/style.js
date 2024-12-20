import styled from 'styled-components'

export const ItemWrapper = styled.div`
	flex-shrink: 0;
	box-sizing: border-box;
	width: ${props => props.$itemwidth};
	padding: 8px;

	.inner {
		width: 100%;
	}

	.slider {
		position: relative;
		cursor: pointer;

		.control {
			position: absolute;
			z-index: 1;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: none;
			justify-content: space-between;
			color: #fff;

			.btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 83px;
				height: 100%;
				z-index: 999;
				background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
				&.right {
					background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
				}
			}
		}

		&:hover {
			.control {
				display: flex;
			}
		}

		.indicator {
			position: absolute;
			z-index: 9;
			width: 30%;
			left: 0;
			right: 0;
			bottom: 10px;
			margin: 0 auto;

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 20%;
			}
			.dot {
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: #fff;
			}
			& .active {
				width: 8px;
				height: 8px;
			}
		}
	}

	.cover {
		position: relative;
		box-sizing: border-box;
		padding: 66.66% 8px 0; /**父盒子的高度占据宽度的三分之二，没有图片的时候也占位 */
		border-radius: 3px;
		overflow: hidden;

		img {
			position: absolute; /**绝对定位定位图片的位置 */
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.desc {
		margin: 10px 0 5px;
		font-size: 12px;
		font-weight: 700;
		color: ${props => props.$desccolor};
	}
	.name {
		font-size: 16px;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; /* 弹性伸缩盒子模型 */
		-webkit-line-clamp: 2; /* 显示的行数 */
		-webkit-box-orient: vertical; /* 设置盒子的排列方向为垂直 */
	}
	.price {
		margin: 8px 0;
	}
	.rate {
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: 600;
		color: ${props => props.theme.text.primaryColor};

		.count {
			margin: 0 2px 0 4px;
		}
		.MuiRating-decimal {
			margin-right: -2px;
		}
	}
`
