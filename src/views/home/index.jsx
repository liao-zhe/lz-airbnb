import React, { memo, useEffect } from "react"
import HomeBanner from "./c-cpns/home-banner"
import { HomeWrapper } from "./style"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchHomeListAciton } from "@/store/modules/home"
import SectionV1 from "./c-cpns/section-v1"
import SectionV2 from "./c-cpns/section-v2"
import { isEmptyObject } from "@/utils/isEmptyObject"
import HomeLongfor from "./c-cpns/home-longfor"
import SectionV3 from "./c-cpns/section-v3"

const Home = memo(() => {
	/** 从redux中获取数据 */
	const { goodsPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusInfo } = useSelector(
		state => ({
			goodsPriceInfo: state.home.goodsPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			discountInfo: state.home.discountInfo,
			hotRecommendInfo: state.home.hotRecommendInfo,
			longforInfo: state.home.longforInfo,
			plusInfo: state.home.plusInfo
		}),
		shallowEqual
	)

	/** 派发异步的事件: 发送网络请求 */
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeListAciton())
	}, [dispatch])

	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				{isEmptyObject(discountInfo) && <SectionV2 infoData={discountInfo} />}
				{isEmptyObject(hotRecommendInfo) && <SectionV2 infoData={hotRecommendInfo} />}
				{isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
				{isEmptyObject(goodsPriceInfo) && <SectionV1 infoData={goodsPriceInfo} />}
				{isEmptyObject(highScoreInfo) && <SectionV1 infoData={highScoreInfo} />}
				{isEmptyObject(plusInfo) && <SectionV3 infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home
