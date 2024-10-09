import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchHomeListAciton = createAsyncThunk(
  'home/highscore',
  async () => {
    const res = await getHomeGoodPriceData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHomeListAciton.fulfilled, (state, action) => {
      state.goodsPriceInfo = action.payload
    })
  }
})

export default homeSlice.reducer
