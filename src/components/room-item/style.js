import styled from 'styled-components'

export const ItemWrapper = styled.div`
	flex-shrink: 0;
	box-sizing: border-box;
	width: ${props => props.$itemwidth};
	padding: 8px;

	.inner {
		width: 100%;
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
