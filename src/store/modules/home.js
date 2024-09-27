import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeList: []
  },
  reducers: {
    changeHomeList(state, action) {
      state.homeList = action.payload
    }
  }
})

export const { changeHomeList } = homeSlice.actions
export default homeSlice.reducer
