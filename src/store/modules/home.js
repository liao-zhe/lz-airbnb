import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighscoreData
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
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodsPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    }
  },
  extraReducers: builder => {
    // builder.addCase(fetchHomeListAciton.fulfilled, (state, action) => {
    //   state.goodsPriceInfo = action.payload
    // })
  }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions
export default homeSlice.reducer
