import React, { memo, useEffect, shallowEqual } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeListAciton } from '@/store/modules/home'
import SectionV1 from './c-cpns/section-v1'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodsPriceInfo, highScoreInfo } = useSelector(
    state => ({
      goodsPriceInfo: state.home.goodsPriceInfo,
      highScoreInfo: state.home.highScoreInfo
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
        <SectionV1 infoData={goodsPriceInfo} />
        <SectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
