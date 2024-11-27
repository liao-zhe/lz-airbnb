import styled from 'styled-components'

export const DetailPicturesWrapper = styled.div`
	position: relative;

	> .top {
		display: flex;
		height: 600px;
		background-color: #000;

		.left,
		.right {
			width: 50%;
			height: 100%;

			.item {
				position: relative;
				height: 100%;
				overflow: hidden;
				cursor: pointer;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 200ms ease;
				}

				.cover {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: rgba(0, 0, 0, 0.3);
					transition: opacity 200ms ease;
				}
				&:hover {
					img {
						transform: scale(1.1);
					}
					.cover {
						opacity: 0;
					}
				}
			}
		}

		.right {
			display: flex;
			flex-wrap: wrap;
			.item {
				width: 50%;
				height: 50%;
				box-sizing: border-box;
				border: 1px solid #000;
			}
		}
	}

	.show-btn {
		position: absolute;
		right: 15px;
		bottom: 15px;
		padding: 6px 15px;
		border-radius: 4px;
		background-color: #fff;
		line-height: 22px;
		cursor: pointer;
		z-index: 99;
	}
`
