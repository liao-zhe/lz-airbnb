// 项目公共共享的模块
import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		headerConfig: {
			isFixed: false, // 首页、更多是固定定位，详情不是
			isHome: false //是否首页
		}
	},
	reducers: {
		changeHeaderConfigAction(state, action) {
			state.headerConfig = action.payload
		}
	}
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
