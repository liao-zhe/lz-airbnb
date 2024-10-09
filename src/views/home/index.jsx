import React, { memo, useEffect, shallowEqual } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeListAciton } from '@/store/modules/home'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodsPriceInfo } = useSelector(
    state => ({
      goodsPriceInfo: state.home.goodsPriceInfo
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
        <div className="goods-price">
          <SectionHeader title={goodsPriceInfo.title}></SectionHeader>
          <SectionRooms
            roomList={goodsPriceInfo.list}
          ></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
