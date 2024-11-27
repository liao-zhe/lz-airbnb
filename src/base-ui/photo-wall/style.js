import styled from 'styled-components'

export const PhotoWallWrapper = styled.div`
	position: fixed;
	z-index: 999;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: rgb(33, 33, 33);
	opacity: 1;
	display: flex;
	flex-direction: column;

	.top {
		position: relative;
		height: 86px;

		.btn-close {
			position: absolute;
			right: 20px;
			top: 20px;
		}
	}
	.slider {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		overflow: hidden;

		.control {
			position: absolute;
			z-index: 1;
			left: 0px;
			right: 0px;
			top: 0px;
			display: flex;
			justify-content: space-between;
			bottom: 0px;
			color: rgb(255, 255, 255);

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 83px;
				color: #fff;
				height: 100%;
				cursor: pointer;
			}
		}

		.container {
			position: relative;
			width: 100%;
			height: 100%;
			max-width: 105vh;
			overflow: hidden;

			img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				height: 100%;
				margin: 0 auto;
				height: 100%;
				user-select: none;
			}
			.fade-enter {
				opacity: 0;
				transform: translate(${props => (props.$isNext ? '-100%' : '100%')});
			}
			.fade-enter-active {
				opacity: 1;
				transform: translate(0);
				transition: all 150ms ease;
			}
			.fade-exit {
				opacity: 1;
			}
			.fade-exit-active {
				opacity: 0;
				transition: all 150ms ease;
			}
		}
	}
	.priview {
		display: flex;
		justify-content: center;
		height: 100px;
		margin-top: 10px;

		.info {
			position: absolute;
			bottom: 10px;
			max-width: 105vh;
			color: #fff;
			.desc {
				display: flex;
				justify-content: space-between;
				.toggle {
					cursor: pointer;
				}
			}
		}
		.list {
			overflow: hidden;
			margin-top: 5px;
			transition: height 250ms ease;

			.item {
				height: 67px;
				margin-right: 15px;
				cursor: pointer;

				img {
					height: 67px;
					opacity: 0.5;
				}

				&.active {
					img {
						opacity: 1;
					}
				}
			}
		}
	}
`
