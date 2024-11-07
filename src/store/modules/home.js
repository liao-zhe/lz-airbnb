import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighscoreData,
  getHomeHotRecommendData
} from '@/services/modules/home'

// 异步获取数据
export const fetchHomeListAciton = createAsyncThunk(
  'fetchdata',
  (payload, store) => {
    getHomeGoodPriceData().then(res => {
      store.dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighscoreData().then(res => {
      store.dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
      store.dispatch(changeHomeDiscountInfoActon(res))
    })
    getHomeHotRecommendData().then(res => {
      store.dispatch(changeHomeRecommendInfoAciton(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodsPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeHomeDiscountInfoActon(state, { payload }) {
      state.discountInfo = payload
    },
    changeHomeRecommendInfoAciton(state, { payload }) {
      state.hotRecommendInfo = payload
    }
  },
  extraReducers: builder => {
    // builder.addCase(fetchHomeListAciton.fulfilled, (state, action) => {
    //   state.goodsPriceInfo = action.payload
    // })
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeHomeDiscountInfoActon,
  changeHomeRecommendInfoAciton
} = homeSlice.actions
export default homeSlice.reducer
